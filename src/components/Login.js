import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
         
    <form className="m-4">
      <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input type="email" className="form-control" id="name" /> 
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn button">Submit</button>
        <Link to="chat">Chat</Link>
      </div>
    </form>

</div>
      
          
  );
};


export default Login;