import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className='contact-page' id="contact">
          <div className='club-pages'>
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