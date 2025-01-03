import { useState } from 'react'
import './clubAdmin.css'
import Image from './image.png'
import React from 'react'
const AdminPage = () => {
  const [details,setDetail]=useState({
    detail:''
  });
  const [deleteEvent,setDelete]=useState({
    deleteId:''
  })

  const deleteHandler=(e)=>{
    e.preventDefault();
    console.log({...deleteEvent});
  }
  const addHandler=(e)=>{
    e.preventDefault();
    console.log({...details});
  }
  const [edit,setEdit]=useState({
    id: '',
    editedDetail:''
    
  });
  const editHandler=(e)=>{
    e.preventDefault();
    console.log({...edit});

  }
  const [adminTask,setAdminTask]=useState('add');
  return (
    <div className='club-admin-page'>
     <div className='club-admin-content'>
      <img src={Image}alt=''/>
      <div className='two-contents'>
      <div className='admin-tasks'>
        <button onClick={()=>setAdminTask('add')}className={adminTask==='add'?'active-button':''}>Add Event⬇️</button>
        <button onClick={()=>setAdminTask('edit')}className={adminTask==='edit'?'active-button':''}>Edit Event⬇️</button>
        <button onClick={()=>setAdminTask('delete')}className={adminTask==='delete'?'active-button':''}>Delete Event⬇️</button>
      </div>
      {adminTask==='add'?
      <div>
      <form className='add-event-form' onSubmit={addHandler}>
        <h2> club admin panel</h2> 
            <textarea className='text-area'name='details'value={details.detail} placeholder='Write your event detail here ...'required onChange={(e)=>setDetail({...details,detail:e.target.value})}>
            </textarea>
            <button onSubmit={addHandler} className='submit-login'type='submit'>post</button>
    </form>
      </div>
      :adminTask==='edit'?
      <div>
      <form className='add-event-form'onSubmit={editHandler}>
        <h2> admin panel</h2> 
            <input type='text'name ="id"value={edit.id}placeholder='Event id'required onChange={(e)=>setEdit({...edit,id:e.target.value})}/>
            <textarea type='text'name="editedDetail"value={edit.editedDetail}  placeholder='Event details'required onChange={(e)=>setEdit({...edit,editedDetail:e.target.value})}></textarea>
            <button className='submit-login'type='submit'>Save change</button>
    </form>
      </div>
      :adminTask==='delete'?
      <div>
      <form className='add-event-form' onSubmit={deleteHandler}>
        <h2> club admin panel</h2> 
      <input type='text'placeholder='Event Id' required name="eventId"value={deleteEvent.deleteId} onChange={(e)=>setDelete({...deleteEvent,deleteId:e.target.value})}/>
            <textarea placeholder='Reason'required></textarea>
            <button className='submit-login'type='submit'>Delete Event</button>
    </form>
      </div>
      :
      <div>
      <form className='add-event-form'>
        <h2> club admin panel</h2> 
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