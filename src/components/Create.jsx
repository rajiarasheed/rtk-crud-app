import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

function Create() {
    
    const [users,setUsers]=useState({})
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const getUserData=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
       
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
         console.log(users);
        dispatch(createUser(users))
        navigate('/read')
    }
  return (
    <div>
        <form className='w-50 mx-auto mt-5'onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" name='name' className="form-control" onChange={getUserData}/>
    
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" onChange={getUserData}/>
    <div className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="text" name='age' className="form-control" onChange={getUserData}/>
    <div className="form-text">We'll never share your email with anyone else.</div>
  </div>
  {/* <div class="mb-3">
    <label for="exampleInputPassword1" name='password' class="form-label">Password</label>
    <input type="password" class="form-control"/>
  </div> */}
  
  <div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value='male' onChange={getUserData}/>
  <label className="form-check-label">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value='female' onChange={getUserData}/>
  <label className="form-check-label">
    Female
  </label>
</div>
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>
    </div>
  )
}

export default Create