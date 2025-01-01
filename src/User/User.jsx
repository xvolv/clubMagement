import React from 'react'
import './user.css'
import { useState } from 'react'
const User= () => {
  const [showPassword,setShowPassword]=useState(false);
  const [userData,setUserData]=useState({
    user_name:'',
    user_password:''
  })
  const userDataHandler=(e)=>{

  }
  return (
    <div className='user-page'>
        <form className='user-form'>
     <label for="club-select">Choose a club:
    <select className="club-select" name="clubs">
        <option value="sports">Sports Club</option>
        <option value="tech">Tech Club</option>
        <option value="art">Art Club</option>
        <option value="peace">Peace Club</option>
    </select>  </label>  
            <input type='text'placeholder='👤user name' required/>
            <input type={showPassword?'text':'password'}placeholder='user password'required/>
            <i onClick={()=>setShowPassword(!showPassword)} className="fa-solid fa-eye user-eye"></i>
            <button className='forget-password'>forget password</button>
            <button className='submit-login'type='submit'>login</button>
    </form>
    </div>
  )
}
export default User