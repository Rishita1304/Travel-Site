import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "./login.css"

const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        alert("Welcome :)");
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
                <input type="text" id="username" className="loginInput" placeholder='Username' />
                <input type="password" id="password" className="loginInput" placeholder='Password' />
                <div className="loginButton">
                    <button onClick={handleClick}>Login</button>
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

export default Login
