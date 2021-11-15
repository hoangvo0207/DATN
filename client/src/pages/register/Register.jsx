import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from '../../constants/constant';
import './register.scss';
import logo from '../register/logo.PNG';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleRegister = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post(`${apiUrl}/auth/register`, { email, username, password });
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                    <img
                        className='logo'
                        src={logo}
                        alt='logo'
                    />
                </div>
            </div>

            <div className='container'>
                <h1>Unlimited movie, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {
                    !email ? (
                        <div className='input'>
                            <input type='email' placeholder='Email Address' ref={emailRef} />
                            <button
                                className='registerButton'
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </div>
                    ) : (
                        <form className='input'>
                            <input type='username' placeholder='Username' ref={usernameRef} />
                            <input type='password' placeholder='Password' ref={passwordRef} />
                            <button
                                className='registerButton'
                                onClick={handleFinish}
                            >
                                Start
                            </button>
                        </form>
                    )
                }
                <Link to='/login' style={{ marginTop: 10, color: 'white', textDecoration: 'none' }}>
                    <p>Already have account? Sign In</p>
                </Link>
            </div>
        </div>
    );
};

export default Register;