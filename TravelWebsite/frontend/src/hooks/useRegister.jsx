import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
    const navigate = useNavigate();
    const register = (name, email, password) => {
        axios.post( 'http://localhost:3001/api/user/signup', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));

    }
    return {register}

}