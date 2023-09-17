import * as React from 'react';
import { logEndPoint } from '../../spotify';
import "./login.css";

const Login = () => {
    return (
        <div className='login-container'>
            <img src="https://i.pinimg.com/originals/79/0a/bf/790abf296ade331e4b41e8eafdc69434.png"
                alt=''
                className='login-img'
            />
            <a href={logEndPoint} className='login-btn'>
                <span>Log In</span>
            </a>
        </div>
    )
}

export default Login;