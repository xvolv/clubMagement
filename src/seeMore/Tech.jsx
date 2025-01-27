import React, { useState } from "react";
import "./seeMore.css";
import { joinTechClub } from "../Service/JoinClubService"; // Updated import

const Tech = () => {
  const [formData, setFormData] = useState({
    username: "", // Username
    password: "", // Password
  });
  const [message, setMessage] = useState("");

  const joinHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("Joining club with:", formData.username, formData.password);

      // Call the API to join the club directly with username and password as query params
      const response = await joinTechClub(formData.username, formData.password);

      // If the API response is successful
      if (response.status === 200) {
        setMessage("Successfully joined the Tech Club!");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setMessage("you have not registred yet!");
      } else if (error.response.status === 409) {
        setMessage("You are already a memeber! ");
      }
      console.error("xxxError joining the club:", error);
    }
  };

  const eventData = [
    {
      id: 1,
      img: "https://images.spiceworks.com/wp-content/uploads/2023/09/05181029/top-10-tech-events-in-September-2023.jpg",
      date: "September 2, 2024",
      details:
        "Tech Innovations Conference: A premier event showcasing cutting-edge advancements in AI, robotics, and software development. Attendees will have the opportunity to explore groundbreaking technologies and network with industry leaders.",
    },
    {
      id: 2,
      img: "https://www.hire-intelligence.co.uk/wp-content/uploads/2018/02/photo-1504384764586-bb4cdc1707b0.jpg",
      date: "December 12, 2024",
      details:
        "Cybersecurity Workshop: An in-depth session focusing on the latest cybersecurity practices and tools. Learn from top professionals about safeguarding systems against modern threats and vulnerabilities.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEhfVsTjkCTtAe7KSIadAMJa8kCNmPMQeEg&s",
      date: "December 2, 2024",
      details:
        "Web Development Bootcamp: A hands-on workshop covering front-end and back-end development. Participants will gain practical skills in HTML, CSS, JavaScript, and modern frameworks like React and Node.js.",
    },
  ];

  return (
    <div className="see-more-page">
      <div className="see-more-content">
        <h2>
          Tech Club is a vibrant community that fosters innovation and
          creativity in technology. We organize events that help students and
          professionals explore new trends in software, hardware, and emerging
          technologies.{" "}
          <strong>
            Here are some of the key events we are hosting this year:
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
          <form onSubmit={joinHandler}>
            {message && <p>{message}</p>}
            <input
              type="text"
              name="username"
              required
              placeholder="Enter your Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tech;
