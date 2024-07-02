import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/login.css';

const ResetAccount = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [role, setRole] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { email: originEmail } = location.state;
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post( 'http://localhost:3001/resetAccount', {email: email || originEmail, password, password2, role: role || 0})
      .then(result => {
        console.log(result);
        if(result.data.message === "Success"){
          localStorage.setItem("user", JSON.stringify(result.data.data))
          navigate('/login');
          alert('Reset successful!')
        }
        else{
          alert('Reset Failed! Please Check Input Info!');
        }
      })
      .catch(err => console.log(err));
  }
  
  
  return (
    <div className="LoginOrRegister mt-140">
      <div className="d-flex justify-content-center align-items-center text-center vh-80" >
        <div className="bg-white rounded login-from" style={{width : '40%'}}>
          <h2 className='mb-3 login-title'>Reset Password</h2>
          <form onSubmit={handleSubmit} className='p-5'>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                disabled
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                value={originEmail}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Old Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword2" className="form-label">
                <strong>New Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword2"
                onChange={(event) => setPassword2(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputRole" className="form-label">
                <strong>Role</strong>
              </label>
              <select
                placeholder="Select Role"
                className="form-control"
                id="exampleInputRole"
                onChange={(event) => setRole(event.target.value)}
                required>
                <option value="0">Admin</option>
                <option value="1">User</option>
              </select>
            </div>
            <button type="submit" className="submit-btn ">Reset</button>
          </form>
          <p className='login-footer'>
            <span className="register-btn" onClick={() => navigate('/login')}>Login</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetAccount