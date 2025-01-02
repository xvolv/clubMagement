import React, { useState, useEffect } from "react";
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
  const [image, setImage] = useState('');
  const [currentImage, setCurrentImage] = useState(image1); // Initial image
  const [showEvent, setShowEvent] = useState(false);

  // Array of images and their details
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

  const imageArray = [image1, image2, image3];
  let currentImageIndex = 0;

  // Function to handle opening image in overlay
  const openImage = (src) => {
    setImage(src);
  };

  // Function to close image overlay
  const closeImage = () => {
    setImage('');
  };

  // Function to change image every 5 seconds with fade effect
  const changeImage = () => {
    const imgElement = document.getElementById('slideshow-image');
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % imageArray.length;
      imgElement.src = imageArray[currentImageIndex];
      imgElement.style.opacity = 1;
    }, 1000);
  };

  // Using useEffect to start the slideshow
  useEffect(() => {
    const interval = setInterval(changeImage, 5000); // Changes image every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, [imageArray]);

  return (
    <div className="photo-page" id="home">
      <h2>University Club Management System</h2>

      {/* Display Image Slideshow */}
      <div className="slideshow-container">
        <img id="slideshow-image" src={currentImage} alt="Slideshow" className="dynamic-image" />
      </div>

      <button className="btn-show-events" onClick={() => setShowEvent(!showEvent)}>
        📅 Show Events This Week
      </button>

      {showEvent && (
        <div className="event-list">
          <div className="event-item">🗓️ Peace Workshop - December 12, 2024: Join us for an engaging workshop focused on conflict resolution and understanding diverse perspectives. Open to all members!</div>
          <div className="event-item">🗓️ Tech Hackathon - December 14, 2024: Participate in our exciting hackathon where teams will innovate solutions for real-world challenges. Great prizes await the winners!</div>
        </div>
      )}

      <div className="photo-data">
        {images.map(({ src, detail }, index) => (
          <div key={index} className="image-container">
            <img src={src} alt={`Club ${index}`} onClick={() => openImage(src)} />
            <p>{detail}</p>
            <div className="register-seeMore">
              <Link to='/see_more' className='see-more'>See More</Link>
              <Link to='/register' className='register'>Register Here</Link>
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