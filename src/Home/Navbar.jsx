import React, { useState } from 'react';
import './navbar.css';
import Image from './club.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [dropdown, setDropDown] = useState(false);

  const dropdownHandler = () => {
    setDropDown(!dropdown);
  };

  return (
    <div className='nav-basr'>
      <nav className='nav'>
        <ul className='lists'>
          <li
            onClick={() => setActiveItem('home')}
            className={activeItem === 'home' ? 'actives' : ''}
          >
            <Link to='/'><i className="fa-solid fa-house"></i></Link>
          </li>
          <li
            onClick={() => setActiveItem('about')}
            className={activeItem === 'about' ? 'actives' : ''}
          >
            <a href='#about'>About</a>
          </li>
          <li
            onClick={() => setActiveItem('contact')}
            className={activeItem === 'contact' ? 'actives' : ''}
          >
          </li>
          <li  onClick={() => setActiveItem('register')}
        className={activeItem === 'register' ? 'actives' : ''}><Link to='/register'>Register</Link></li>
          <li
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
            onClick={() => setActiveItem('login')}
          >
            <a href='#'>Login</a>
            {dropdown && (
              <div className='dropdown-content'>
                <Link to='/admin'>Login as admin</Link>
                <Link to='/user'>Login as user</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;