import React from 'react'
import './navbar.css'
import { useState } from 'react'
import Image from'./club.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
const [activeItem, setActiveItem] = useState('home');
const [dropdown,setDropDown]=useState(false);
const dropdownHandler=()=>{
    setDropDown(!dropdown);
}
  return (
    <div className='nav-basr'>
        <nav className='nav'>
                <input className='search'type='search' placeholder='Search for club'/><i className="fas fa-search search-icon"></i>
            <ul className='lists'>
                <li onClick={()=>setActiveItem('home')} className={activeItem === 'home' ? 'actives' : ''}>
                    <Link to='/'>home</Link>
                </li>
                <li onClick={()=>setActiveItem('about')} className={activeItem === 'about' ? 'actives' : ''}>
                    <a href='#about'>About</a>
                </li>
                <li onClick={()=>setActiveItem('contact')} className={activeItem === 'contact' ? 'actives' : ''}>
                    <a href='#contact' >Contact us</a>
                </li>
                <li onClick={()=>setActiveItem('login')} className={activeItem === 'login' ? 'actives' : ''}>
                    <a  href='#' onMouseOver={()=>dropdownHandler()} >Login</a>
                </li>
        
                  
            </ul>
        </nav>
        {dropdown &&
            <div class="dropdown-content">
              <Link to='/admin'>Login as admin</Link>
              <Link to='/user'>Login as user</Link>
            </div>
       }
    </div>
  )
}
export default Navbar