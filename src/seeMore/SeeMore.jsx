import React from 'react';
import './seeMore.css';
import { useState } from 'react';
import Image1 from './sport.png';

const SeeMore = () => {
  const eventData = [
    {   
      id: 1, 
      img: Image1,
      date: "September 2, 2024",
      details: "Annual Sports Day: A day filled with athletic competitions and team events to promote fitness and camaraderie."
    },
    {   
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b0BXeFdNR7GAuYz1QJkF_AA_FitKBU2srw&s",
      date: "December 12, 2024",
      details: "Winter Basketball Championship: A competitive basketball tournament featuring top teams from various clubs."
    },
    {   
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlZGYvFe1-aM3drbrPiLjYokNwFcZcY0fQw&s",
      date: "December 2, 2024",
      details: "Football Skills Workshop: A session to enhance football techniques with guidance from professional coaches."
    }
  ];

  return (
    <div className='see-more-page'>
      <div className='see-more-content'>
        <h2>Sport Club is a club that promotes physical fitness, teamwork, and competitive sports, organizing tournaments and training sessions in football, basketball, and more.<strong>Here below are some of our event we conduct throughout this year</strong></h2>
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
    </div>
  );
};

export default SeeMore;
