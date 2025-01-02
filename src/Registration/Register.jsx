import React from 'react'
import './register.css'
import { useState } from 'react'
const Registration =() => {
  const [showPassword,setShowPassword]=useState(false);
  const [Registration,setRegistration]=useState({
    Registration_name:'',
    Registration_password:''
  })
  const RegistrationHandle=(e)=>{

  }
  return (
    <div className='Registration-page'>
        <form className='Registration-form'> 
        <label for="club-select">
    <select className="club-select" name="clubs">
        <option value="sports">Sports Club</option>
        <option value="tech">Tech Club</option>
        <option value="art">Art Club</option>
        <option value="peace">Peace Club</option>
    </select>  </label>
            <input type='text'placeholder='Register user name' required/>
            <input type='text'placeholder='👤 Full Name name' required/>
            <input type='text'placeholder='📚Department' required/>
            <input type='email'placeholder='✉️email' required/>
            <input type='number'placeholder='🙍Batch' required/>
            <input type={showPassword?'text':'password'}placeholder="confirm password don't forget"required/>
            <i onClick={()=>setShowPassword(!showPassword)} className="fa-solid fa-eye eye"></i>
            <button className='forget-password'>Register</button>
            <button onClick={()=>alert("You can login in login option on the right corner of the page ")}className='submit-login'type='submit'>Already have account</button>
    </form>
    </div>
  )
}
export default Registration