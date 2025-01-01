import React from 'react';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import AboutUs from './AboutUs';
const Home = () => {
  return (
      <div>
      <Gallery/>    
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}

export default Home;