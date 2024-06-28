import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    console.log('Sending request to login with email:', email, 'and password:', password);
    axios.post('http://localhost:3001/api/user/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Success") {
          login(result.data.token);
          navigate('/home');
          alert('Login successful!');
          window.location.reload();
        } else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err => {
        console.log('Error:', err);
        if (err.response) {
        
          if (err.response.status === 401) {
            alert('Incorrect password! Please try again.');
          } else if (err.response.status === 404) {
            alert('No records found! Please check your email and try again.');
          } else if (err.response.status === 500) {
            alert('Internal server error. Please try again later.');
          } else {
            alert(`Unexpected error: ${err.response.data.message}`);
          }
        } else if (err.request) {
    
          alert('No response from server. Please check your network connection.');
        } else {
          alert(`Error: ${err.message}`);
        }
      });
  };

  return { handleLogin };
};

