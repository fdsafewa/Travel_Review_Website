import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { handleRegister } = useRegister();

    const handleSubmit = (event) => {
        event.preventDefault();
        handleRegister(name, email, password);
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-80">
              <div className="bg-white login-from rounded" style={{width: '40%'}}>
                <h2 className='mb-3 login-title'>Register</h2>
                <form onSubmit={handleSubmit}  className='p-5'>
                  <div className="mb-3 text-start">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      <strong>Name</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="form-control"
                      id="exampleInputname"
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      <strong>Email</strong>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      <strong>Password</strong>
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
                  <button type="submit" className="submit-btn">Register</button>
                </form>
                
                <p className='container login-footer'>
                  Don&apos;t have an account? <span className="register-btn"
                                                    onClick={() => navigate('/login')}>Login</span>
                </p>
              </div>
            </div>
        </div>
    )
}

export default Register;