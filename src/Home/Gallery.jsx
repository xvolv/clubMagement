import React from "react";
import Sport from "./sport.png";
import Tech from "./tech.png";
import "./gallery.css";
import Peace from "./peace.png";
import Art from './art.png'
import { useState } from "react";
import {Link} from 'react-router-dom'
const Gallery = () => {
const [image,setImage]=useState('');
const openImage = (src) => {
  setImage(src);
}
const closeImage = () => {  
  setImage('');
}
const images = [
  { 
    src: Sport, 
    detail: "The Sport Club promotes physical fitness, teamwork, and competitive sports, organizing tournaments and training sessions in football, basketball, and more."
  },
  { 
    src: Tech, 
    detail: "The Tech Club encourages innovation with coding challenges, hackathons, and workshops on AI, blockchain, and robotics."
  },
  { 
    src: Peace, 
    detail: "The Peace Club fosters understanding and conflict resolution through cultural exchanges, panel discussions, and leadership workshops."
  },
  { 
    src: Art, 
    detail: "The Art Club celebrates creativity with activities in painting, sculpture, and photography, hosting exhibitions and workshops."
  }
];
const [showEvent,SetShowEvent]=useState(false);
  
  return (
    <div className="photo-page" id="home">
      <h2>University Club Management System </h2>
      <button className="btn-show-events" onClick={()=>SetShowEvent(!showEvent)}>📅 Show Events This Week</button>
      {showEvent &&
       <div className="event-list">
      <div className="event-item">🗓️ Peace Workshop - December 12, 2024: Join us for an engaging workshop focused on conflict resolution and understanding diverse perspectives. Open to all members!</div>
      <div className="event-item">🗓️ Tech Hackathon - December 14, 2024: Participate in our exciting hackathon where teams will innovate solutions for real-world challenges. Great prizes await the winners!</div>
    </div>
}
      <div className="photo-data">
        {images.map(({ src, detail }, index) => (
          <div key={index} className="image-container">
            <img src={src} alt="" onClick={() => openImage(src)}/>
            <p>{detail}</p>
            <div className="register-seeMore">
            <Link to='/see_more'className='see-more'>See More</Link>
           <Link to='/register'className='register'>Register Here</Link> 
            </div>
          </div>
        ))}
      </div>
      {image &&(
        <div className="overlay" onClick={closeImage}>
          <img src={image} alt=""className="overlay-image"/>
        </div>
      )}
    </div>
  );
};

export default Gallery;