import React, { useState } from 'react';
import './seeMore.css';

const Peace = () => {
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
      img: "https://t3.ftcdn.net/jpg/09/22/47/66/360_F_922476656_ctuBCv4GxIgWySYr9ptxpTo0cW8J43Mt.jpg",
      date: "September 2, 2024",
      details: "International Day of Peace: A celebration promoting global harmony through cultural performances and peace-building workshops."
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/international-day-peace-banner-design_1308-113792.jpg",
      date: "December 12, 2024",
      details: "Peace Art Competition: An event to express the essence of peace through artistic creations, with submissions from participants worldwide."
    },
    {
      id: 3,
      img: "https://www.un.org/sites/un2.un.org/files/webform/219548/global_peace_flag_true.png",
      date: "December 2, 2024",
      details: "Community Peace Walk: A gathering to promote unity and understanding through a symbolic walk and keynote addresses from peace activists."
    }
  ];

  return (
    <div className='see-more-page'>
      <div className='see-more-content'>
        <h2>Peace Club is dedicated to fostering harmony, understanding, and collaboration among individuals through meaningful events and activities. <strong>Here are some of the highlights of our peace initiatives this year:</strong></h2>
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

export default Peace;
