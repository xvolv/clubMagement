import React, { useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate_to = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [adminData, setAdminData] = useState({
    admin_name: '',
    admin_password: ''
  });

  const adminDataHandler = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const adminLoginHandler = (e) => {
    e.preventDefault();

    if (adminData.admin_name === 'hello' && adminData.admin_password === 'admin') {
      navigate_to('/admin_page');
      console.log('Admin login successful');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className='admin-page'>
      <form className='admin-form' onSubmit={adminLoginHandler}>
        <label htmlFor="club-select">Choose a club:
        <select className="club-select" name="club">
          <option value="tech">Tech Club</option>
          <option value="sports">Sports Club</option>
          <option value="art">Art Club</option>
          <option value="peace">Peace Club</option>
        </select>
        </label>
        <input
          type="text"
          name="admin_name"
          placeholder="👤 Admin user name"
          required
          value={adminData.admin_name}
          onChange={adminDataHandler}
        />

        <input
          type={showPassword ? 'text' : 'password'}
          name="admin_password"
          placeholder="Admin password"
          required
          value={adminData.admin_password}
          onChange={adminDataHandler}
        />

        <i
          onClick={() => setShowPassword(!showPassword)}
          className="fa-solid fa-eye eye"
        ></i>

        <button type="button" className="forget-password">
          Forget password
        </button>
        <button type="submit" className="submit-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;