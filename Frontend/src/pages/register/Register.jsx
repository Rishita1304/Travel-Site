import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        alert("You Have Been Successfully Registered!!");
        navigate("/");
           
    };
  return (
    <div className='loginContainer'>
        <div className="loginRow">
            <div className="loginCol">
                <Header type="smallHeader" />
            </div>
        </div>
        <div className="loginRow">
            <div className="loginCol">
                <input type="text" id="username" className="loginInput" placeholder='Username' required />
                <input type="email" id="email" className="loginInput" placeholder='Email (abc@gmail.com)' />
                <input type="tel" id="tel" className="loginInput" placeholder='Phone Number' />
                <input type="password" id="password" className="loginInput" placeholder='Password' />
                <input type="password" id="c-password" className="loginInput" placeholder='Confirm Password' />
                <div className="loginButton">
                    <button onClick={handleClick}> Register </button>
                </div>
            </div>
        </div>
        <div className="loginRow">
            <div className="loginCol">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Register
