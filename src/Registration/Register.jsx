import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Registration = () => {
  const navigateToHome = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registration, setRegistration] = useState({
    registrationName: '',
    registrationPassword: ''
  });
  const [message, setMessage] = useState('');
  const [allow, setAllow] = useState(false);

  const registrationHandler = (e) => {
    e.preventDefault(); 
    setMessage("Congratulations! You have successfully registered.You can join the club.");
    setAllow(true);
    setTimeout(() => {
     navigateToHome('/'); 
    },6000);
  };

  return (
    <div >
    {allow && <div className='message'>{message}</div>}

    <div className='Registration-page'>
      <form className='Registration-form' onSubmit={registrationHandler}>
        <input 
          type='text' 
          placeholder='Register user name' 
          required 
          value={registration.registrationName} 
          onChange={(e) => setRegistration({ ...registration, registrationName: e.target.value })} 
        />
        <input 
          type='text' 
          placeholder='👤 Full Name' 
          required 
        />
        <input 
          type='text' 
          placeholder='📚 Department' 
          required 
        />
        <input 
          type='email' 
          placeholder='✉️ Email' 
          required 
        />
        <input 
          type='number' 
          placeholder='🙍 Batch' 
          required 
          min={2020} 
          max={2027} 
        />
        <input 
          type={showPassword ? 'text' : 'password'} 
          placeholder="Confirm password (don't forget)" 
          required 
        />
        <i onClick={() => setShowPassword(!showPassword)} className="fa-solid fa-eye eye"></i>
        <button className='register-button' type='submit'>Register</button>
        <button 
          onClick={() => alert("You can login in the login option on the right corner of the page")} 
          className='submit-login' 
          type='button'
        >
          Already have an account?
        </button>
      </form>
    </div>
    </div>
  );
};

export default Registration;