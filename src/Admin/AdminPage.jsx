import { useState } from 'react'
import './clubAdmin.css'
import React from 'react'
const AdminPage = () => {
  const [adminTask,setAdminTask]=useState('add');
  return (
    <div className='club-admin-page'>
     <div className='club-admin-content'>
      <img src="https://media.istockphoto.com/id/2161298305/photo/big-data-technology-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=feN-86ivxpgpl5lu-57AIjOt2tVgn84D98mZPcHmyQw="alt=''/>
      <div className='two-contents'>
      <div className='admin-tasks'>
        <button onClick={()=>setAdminTask('add')}className={adminTask==='add'?'active-button':''}>Add Event⬇️</button>
        <button onClick={()=>setAdminTask('edit')}className={adminTask==='edit'?'active-button':''}>Edit Event⬇️</button>
        <button onClick={()=>setAdminTask('delete')}className={adminTask==='delete'?'active-button':''}>Delete Event⬇️</button>
      </div>
      {adminTask==='add'?
      <div>
      <form className='add-event-form'>
        <h2>tech club admin panel</h2> 
      <input type='text'placeholder='👤Admin user name' required/>
            <input type='text'placeholder='Event id'required/>
            <textarea placeholder='Event details'required></textarea>
            <button className='submit-login'type='submit'>post</button>
    </form>
      </div>
      :adminTask==='edit'?
      <div>
      <form className='add-event-form'>
        <h2>tech club admin panel</h2> 
      <input type='text'placeholder='👤Admin user name' required/>
            <input type='text'placeholder='Event id'required/>
            <textarea placeholder='Event details'required></textarea>
            <button className='submit-login'type='submit'>Save change</button>
    </form>
      </div>
      :adminTask==='delete'?
      <div>
      <form className='add-event-form'>
        <h2>tech club admin panel</h2> 
      <input type='text'placeholder='👤Admin user name' required/>
            <input type='text'placeholder='Event id'required/>
            <textarea placeholder='Reason'required></textarea>
            <button className='submit-login'type='submit'>Delete Event</button>
    </form>
      </div>
      :
      <div>
      <form className='add-event-form'>
        <h2>tech club admin panel</h2> 
      <input type='text'placeholder='👤Admin user name' required/>
            <input type='text'placeholder='Event id'required/>
            <textarea placeholder='Event details'required></textarea>
            <button className='submit-login'type='submit'>post</button>
    </form>
      </div>
}
      </div>

     </div>
    </div>
  )
}
export default AdminPage;