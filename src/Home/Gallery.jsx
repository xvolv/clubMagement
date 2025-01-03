import React from 'react'
import {useState,useEffect} from 'react';
import Sport from "./sport.png";
import Tech from "./tech.png";
import Peace from "./peace.png";
import Art from './art.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import { Link } from 'react-router-dom';
import "./gallery.css";


const Gallery = () => {
  const [events , setEvent] = useState({
    event1: '🗓️ Peace Workshop - December 12, 2024: Join us for an engaging workshop focused on conflict resolution and understanding diverse perspectives. Open to all members!',
    event2:'🗓️ Peace Workshop - December 12, 2024: Join us for an engaging workshop focused on conflict resolution and understanding diverse perspectives. Open to all members!',
    event3:'',
    event4:''
  });
  const [image, setImage] = useState('');
  const [currentImage, setCurrentImage] = useState(image1);
  const [showEvent, setShowEvent] = useState(false);
  const images = [
    { link_value:'/sport',
      src: Sport, 
      detail: "The Sport Club promotes physical fitness, teamwork, and competitive sports, organizing tournaments and training sessions in football, basketball, and more."
    },
    { link_value:'/tech',
      src: Tech, 
      detail: "The Tech Club encourages innovation with coding challenges, hackathons, and workshops on AI, blockchain, and robotics."
    },
    { 
      
      link_value:'/peace',
      src: Peace, 
      detail: "The Peace Club fosters understanding and conflict resolution through cultural exchanges, panel discussions, and leadership workshops."
    },
    { link_value:'/art',
      src: Art, 
      detail: "The Art Club celebrates creativity with activities in painting, sculpture, and photography, hosting exhibitions and workshops."
    }
  ];

  const imageArray = [image1, image2, image3];
  let currentImageIndex = 0;

  const openImage = (src) => {
    setImage(src);
  };

  const closeImage = () => {
    setImage('');
  };
  const changeImage = () => {
    const imgElement = document.getElementById('slideshow-image');
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % imageArray.length;
      imgElement.src = imageArray[currentImageIndex];
      imgElement.style.opacity = 1;
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 
    return () => clearInterval(interval);
  }, [imageArray]);

  return (
    <div className="photo-page" id="home">
      <h2>Manage Your Club Like a Pro</h2>
      <div className="slideshow-container">
        <img id="slideshow-image" src={currentImage} alt="Slideshow" className="dynamic-image" />
      </div>

      <button className="btn-show-events" onClick={() => setShowEvent(!showEvent)}>
        📅 Show Events This Week
      </button>

      {showEvent && (
        <div className="event-list">
          <div className="event-item">{events.event2}</div>
          <div className="event-item">{events.event1}</div>
        </div>
      )}

      <div className="photo-data">
        {images.map(({ src, detail,link_value }, index) => (
          <div key={index} className="image-container">
            <img src={src} alt={`Club ${index}`} onClick={() => openImage(src)} />
            <p>{detail}</p>
            <div className="register-seeMore">
              <Link to={link_value} className='see-more' >Join us</Link>
            </div>
          </div>
        ))}
      </div>

      {image && (
        <div className="overlay" onClick={closeImage}>
          <img src={image} alt="Enlarged" className="overlay-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;