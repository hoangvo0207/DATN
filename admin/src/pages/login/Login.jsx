import React, { useContext, useState } from 'react';
import { login } from '../../contexts/authContext/apiCall';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import './login.scss';
import logo from '../login/logo.PNG';

const Login = () => {
    const { isLoading, dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

    return (
        <div className='login'>
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
                <form>
                    <h1>Sign In</h1>
                    <input
                        type='text'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='loginButton' onClick={handleLogin} disabled={isLoading}>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Login;