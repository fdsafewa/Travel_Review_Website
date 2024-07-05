import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/login', {email, password, role: role || 0})
        .then(result => {
            console.log(result);
            if(result.data.message === "Success"){
              localStorage.setItem("token", result.data.token);
              localStorage.setItem("user", JSON.stringify(result.data.data));
                navigate('/');
                alert('Login successful!')
                window.location.reload();
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div className="LoginOrRegister mt-140">
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
                    <button type="submit" className="submit-btn ">Login</button>
                  </form>
                  <p className='login-footer'>
                    Don&apos;t have an account? <span className="register-btn"
                                                      onClick={() => navigate('/register')}>Register</span>
                    <span className="register-btn ml-20"
                          onClick={() => navigate('/resetAccount',  {
                            state: {
                              email: email,
                            }
                          })}>forget password</span>
                  </p>
                </div>
            </div>
        </div>
    )
}

export default Login