import React from 'react';
import SeeMore from './seeMore/SeeMore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Home from './Home/Home';
import AdminLogin from './Admin/AdminLogin';
import User from './User/User';
import Registration from './Registration/Register';
import './App.css'
import AdminPage from './Admin/AdminPage';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*"element={<Home/>}/>
        <Route path="/admin_page" element={<AdminPage/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/see_more" element={<SeeMore />} />
      </Routes>
    </Router>
  );
};

export default App;
