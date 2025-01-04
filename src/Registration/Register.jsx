import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { addUser } from "../Service/RegisterService";

const Registration = () => {
  const navigateToHome = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    department: "",
    batch: "",
    userName: "",
  });
  const [message, setMessage] = useState("");
  const [allow, setAllow] = useState(false);

  const registrationHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(registration); // Log the registration data
      await addUser(registration); // Await the addUser call
      setMessage(
        "Congratulations! You have successfully registered. You can join the club."
      );
      setAllow(true);
      setTimeout(() => {
        navigateToHome("/");
      }, 6000);
    } catch (error) {
      console.error("Registration error:", error); // Log the error for debugging
      setMessage("Sorry! The registration failed. Please try again later.");
    }
  };

  return (
    <div>
      {allow && <div className="message">{message}</div>}

      <div className="Registration-page">
        <form className="Registration-form" onSubmit={registrationHandler}>
          <input
            type="text"
            placeholder="Register user name"
            required
            value={registration.userName}
            onChange={(e) =>
              setRegistration({
                ...registration,
                userName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="👤 Full Name"
            required
            value={registration.fullName}
            onChange={(e) =>
              setRegistration({
                ...registration,
                fullName: e.target.value,
              })
            }
          />
          <input
            type="email"
            placeholder="✉️ Email"
            required
            value={registration.email}
            onChange={(e) =>
              setRegistration({
                ...registration,
                email: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="📚 Department"
            required
            value={registration.department}
            onChange={(e) =>
              setRegistration({
                ...registration,
                department: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="🙍 Batch"
            required
            min={2020}
            max={2027}
            value={registration.batch}
            onChange={(e) =>
              setRegistration({
                ...registration,
                batch: e.target.value,
              })
            }
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password (don't forget)"
            required
            value={registration.password}
            onChange={(e) =>
              setRegistration({
                ...registration,
                password: e.target.value,
              })
            }
          />
          <i
            onClick={() => setShowPassword(!showPassword)}
            className="fa-solid fa-eye eye"
          ></i>
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
