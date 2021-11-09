import React, { useContext, useState } from 'react';
import { login } from '../../contexts/authContext/apiCall';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import './login.css';

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
            <form className='loginForm'>
                <input
                    type='text'
                    placeholder='email'
                    className='loginInput'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    className='loginInput'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className='loginButton'
                    onClick={handleLogin}
                    disabled={isLoading}
                >
                    Login
                </button>
            </form>
        </div>
    )
};

export default Login;