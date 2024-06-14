import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const navigate = useNavigate();
    const login = (name, email, password) => {
    axios.post( 'http://localhost:3001/api/user/login', {email, password})
    .then(result => {
        console.log(result);
        if(result.data.message === "Success"){
            localStorage.setItem("user", JSON.stringify(result.data.data))
            navigate('/home');
            alert('Login successful!')
            window.location.reload();
        }
        else{
            alert('Incorrect password! Please try again.');
        }
    })
    .catch(err => console.log(err));
}

    return {login}


}


