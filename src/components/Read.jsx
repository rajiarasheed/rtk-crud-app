import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";

function Read() {
  // destructure user and loading
  const {users,loading}=useSelector((state)=>state.app)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(showUser())
  },[]);
  if(loading){
    <h3>Loading...</h3>
  }
  return (
    <div className="container">
      <h1 className="mt-4 pb-2">User Datas</h1>
      <div className="row g-4">
        {users && users.map((ele)=>(<div className="col-sm-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <p className="card-text">
                Email : {ele.email} <br />
                Age : {ele.age} <br />
                Gender : {ele.gender}
              </p>
              
              <a href="#" className="btn btn-primary me-2">
                View
              </a>
              <a href="#" className="btn btn-success me-2">
                Edit
              </a>
              <a href="#" className="btn btn-warning">
                Delete
              </a>
            </div>
          </div>
        </div>))
        
        }
      </div>
    </div>
  );
}

export default Read;
