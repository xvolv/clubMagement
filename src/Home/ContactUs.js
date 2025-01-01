import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className='contact-page' id="contact">
          <div className='club-pages'>
          <h2>university Pages</h2>
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
<div className='contact-list'>
  <h2>Reach Out Anytime</h2>
  <div className='contact-list1'>
    <a href="mailto:example@example.com">
      <i className="fa-solid fa-envelope"></i>
    </a>
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-telegram"></i>
      </a>
      <a href="#home" className="scroll-to-top">
  <i className="fa-solid fa-arrow-up"></i>
</a>
    </div>
  </div>
</div>
        </div>
  );
}

export default ContactUs;