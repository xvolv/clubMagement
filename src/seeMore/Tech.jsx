import React from 'react';
import './seeMore.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Tech = () => {
  const [idValue, setId] = useState({
    id: ''
  });

  const idHandler = (e) => {
    e.preventDefault();
    console.log(idValue);
  };

  const eventData = [
    {
      id: 1,
      img: "https://images.spiceworks.com/wp-content/uploads/2023/09/05181029/top-10-tech-events-in-September-2023.jpg",
      date: "September 2, 2024",
      details: "Tech Innovations Conference: A premier event showcasing cutting-edge advancements in AI, robotics, and software development. Attendees will have the opportunity to explore groundbreaking technologies and network with industry leaders."
    },
    {
      id: 2,
      img: "https://www.hire-intelligence.co.uk/wp-content/uploads/2018/02/photo-1504384764586-bb4cdc1707b0.jpg",
      date: "December 12, 2024",
      details: "Cybersecurity Workshop: An in-depth session focusing on the latest cybersecurity practices and tools. Learn from top professionals about safeguarding systems against modern threats and vulnerabilities."
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEhfVsTjkCTtAe7KSIadAMJa8kCNmPMQeEg&s",
      date: "December 2, 2024",
      details: "Web Development Bootcamp: A hands-on workshop covering front-end and back-end development. Participants will gain practical skills in HTML, CSS, JavaScript, and modern frameworks like React and Node.js."
    }
  ];

  return (
    <div className='see-more-page'>
      <div className='see-more-content'>
        <h2>Tech Club is a vibrant community that fosters innovation and creativity in technology. We organize events that help students and professionals explore new trends in software, hardware, and emerging technologies. <strong>Here are some of the key events we are hosting this year:</strong></h2>
      </div>
      {
        eventData.map((item) => (
          <div key={item.id} className='see-more-image-date-content'>
            <img src={item.img} alt='Event' />
            <h3>{item.date}</h3>
            <p>{item.details}</p>
          </div>
        ))
      }
      <div className='join-contact'>
        <div className='club-list'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <i className='fa-brands fa-telegram'></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <i className='fa-brands fa-tiktok'></i>
          </a>
        </div>
        <div className='button-list'>
          <form action="" onSubmit={idHandler}>
            <input type="text" name="id" required placeholder='Enter your registration ID' value={idValue.id} onChange={(e) => setId({ ...idValue, id: e.target.value })} />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tech;
