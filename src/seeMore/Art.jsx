import React, { useState } from "react";
import "./seeMore.css";
import { joinArtClub } from "../Service/JoinClubService"; // Only import the joinArtClub function

const Art = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const idHandler = async (e) => {
    e.preventDefault();

    // Simulating the user ID here (you can directly use the user ID if already available)
    const userId = "user123"; // Replace this with the actual user ID.

    try {
      // Join the art club using the user ID
      await joinArtClub(userId);
      setMessage("Successfully joined the Art Club!");
    } catch (joinError) {
      if (joinError.response && joinError.response.status === 409) {
        setMessage("You are already a member of the Art Club.");
      } else {
        setMessage("Failed to join the Art Club.");
      }
    }
  };

  const eventData = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a5IJiPY5rQaVinmV2DgqkcSvWwM4hKmKSw&s",
      date: "September 2, 2024",
      details:
        "Annual Art Exhibition: A showcase of stunning paintings, sculptures, and digital art from talented artists across the community.",
    },
    {
      id: 2,
      img: "https://art.rtistiq.com/en-us/_next/image?url=https%3A%2F%2Fd28jbe41jq1wak.cloudfront.net%2FBlogsImages%2FPop_Art_Compressed_638237807745595223.jpg&w=1920&q=75",
      date: "December 12, 2024",
      details:
        "Winter Art Workshop: A creative session focusing on watercolor techniques and portrait drawing, guided by renowned artists.",
    },
    {
      id: 3,
      img: "https://www.pictoclub.com/wp-content/uploads/2021/09/painting-brushes-scaled.jpg",
      date: "December 2, 2024",
      details:
        "Photography Skills Seminar: A workshop dedicated to mastering photography, including composition, lighting, and post-processing techniques.",
    },
  ];

  return (
    <div className="see-more-page">
      <div className="see-more-content">
        <h2>
          Art Club is a creative hub that celebrates artistic expression through
          various mediums such as painting, sculpture, and photography.{" "}
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
          <form onSubmit={idHandler}>
            {message && <p>{message}</p>}
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
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
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

export default Art;
