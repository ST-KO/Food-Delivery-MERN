import React, { useContext, useState } from 'react';
import axios from 'axios';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({setShowLogin}) => {
  
    const {url, setToken} = useContext(StoreContext);
    
    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onLogin = async(event) => {
        event.preventDefault(); // to prevent reloading the page on submit

        let serverUrl = url;
        if(currentState === 'Login') {
            serverUrl += "/api/user/login";
        } else{
            serverUrl += "/api/user/register";
        }

        const response = await axios.post(serverUrl, data);
       
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        } else{
            alert(response.data.message);
        }
    };

    return (
        <section className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img 
                        src={assets.cross_icon} 
                        alt="cross icon" 
                        onClick={() => setShowLogin(false)}
                    />
                </div>
                <div className="login-popup-inputs">
                    {
                        currentState === 'Login' ? 
                        <></> :
                        <input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder='Your Name' required />
                    }
                    
                    <input onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder='Your Email' required />
                    <input onChange={onChangeHandler} name="password" value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>
                    {
                        currentState === 'Sign Up' ?
                        "Create Account" :
                        "Login"
                    }
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currentState === 'Login' ?
                    <p>Create a new account? 
                        <span 
                            onClick={() => setCurrentState("Sign Up")}
                        >Sign Up Here</span>
                    </p> :
                    <p>Already have an account? 
                        <span
                            onClick={() => setCurrentState("Login")}
                        >Login Here</span>
                    </p>
                }
            </form>
        </section>
    )
}

export default LoginPopup