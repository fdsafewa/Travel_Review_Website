import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useRegister = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleRegister = (name, email, password) => {
    console.log('Sending request to register with name:', name, 'email:', email, 'and password:', password);
    axios.post('http://localhost:3001/api/user/signup', { name, email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
          alert('Account already exists!');
          navigate('/login');
        } else {
          alert("Registered successfully!");
          login(result.data.token);
          navigate('/home');
        }
      })
      .catch(err => {
        console.log('Error:', err);
        if (err.response) {
    
          if (err.response.status === 400) {
            alert('Account already exists!');
          } else if (err.response.status === 500) {
            alert('Registration failed due to an internal server error. Please try again later.');
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

  return { handleRegister };
};
