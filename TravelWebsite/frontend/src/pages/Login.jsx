import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const {login} = useLogin()

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email,password);
        
    }


    return (
        <div className="LoginOrRegister" style={{ marginTop: '150px'}}>
            <div className="d-flex justify-content-center align-items-center text-center vh-80" >
                <div className="bg-white rounded login-from" style={{width : '40%'}}>
                    <h2 className='mb-3 login-title'>Login</h2>
                    <form onSubmit={handleSubmit} className='p-5'>
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
                        <button type="submit" className="submit-btn ">Login</button>
                    </form>
                    <p className='container login-footer'>
                      Don&apos;t have an account? <span  className="register-btn" onClick={() => navigate('/register')}>Register</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login