import React, { useState } from "react";
import "./seeMore.css";
import { getUserById, joinSportClub } from "../Service/JoinClubService"; // Import the service functions
import Image1 from "./sport.png";

const Sport = () => {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
  });
  const [message, setMessage] = useState("");

  const idHandler = async (e) => {
    e.preventDefault();
    try {
      // Fetch user data by ID
      const response = await getUserById(formData.id);
      if (response.data) {
        // If user exists, verify the username
        if (response.data.username === formData.username) {
          // If username matches, join the sport club
          try {
            await joinSportClub(formData.id);
            setMessage("Successfully joined the Sport Club!");
          } catch (joinError) {
            if (joinError.response && joinError.response.status === 409) {
              // Conflict status code indicates the user is already a member
              setMessage("You are already a member of the Sport Club.");
            } else {
              setMessage("Failed to join the Sport Club.");
            }
          }
        } else {
          setMessage("Username does not match. Please check your username.");
        }
      } else {
        setMessage("User not found. Please register first.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setMessage("Failed to fetch user data.");
    }
  };

  const eventData = [
    {
      id: 1,
      img: Image1,
      date: "September 2, 2024",
      details:
        "Annual Sports Day: A day filled with athletic competitions and team events to promote fitness and camaraderie.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b0BXeFdNR7GAuYz1QJkF_AA_FitKBU2srw&s",
      date: "December 12, 2024",
      details:
        "Winter Basketball Championship: A competitive basketball tournament featuring top teams from various clubs.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlZGYvFe1-aM3drbrPiLjYokNwFcZcY0fQw&s",
      date: "December 2, 2024",
      details:
        "Football Skills Workshop: A session to enhance football techniques with guidance from professional coaches.",
    },
  ];

  return (
    <div className="see-more-page">
      <div className="see-more-content">
        <h2>
          Sport Club is a club that promotes physical fitness, teamwork, and
          competitive sports, organizing tournaments and training sessions in
          football, basketball, and more.
          <strong>
            Here below are some of our event we conduct throughout this year
          </strong>
        </h2>
      </div>
      {eventData.map((item) => (
        <div key={item.id} className="see-more-image-date-content">
          <img src={item.img} alt="Event" />
          <h3>{item.date}</h3>
          <p>{item.details}</p>
        </div>
      ))}
      <div className="join-contact">
        <div className="club-list">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
        <div className="button-list">
          <form onSubmit={idHandler}>
            {message && <p>{message}</p>}
            <input
              type="text"
              name="id"
              required
              placeholder="Enter your registration ID"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            />

            <input
              type="text"
              name="username"
              required
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sport;
