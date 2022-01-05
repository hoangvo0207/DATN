import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../authContext/apiCall';
import { AuthContext } from '../../authContext/AuthContext';
import logo from '../login/logo.PNG';

const useStyles = makeStyles(() => ({
    login: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#00202e',
        position: 'relative'
    },
    wrapper: {
        padding: '20px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        height: 100,
        borderRadius: '50%'
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    form: {
        width: 350,
        height: 500,
        padding: 30,
        borderRadius: 5,
        backgroundColor: '#5e778f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    input: {
        height: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 10
    },
    button: {
        height: 40,
        borderRadius: 5,
        backgroundColor: '#0a344a',
        border: 'none',
        color: 'white',
        fontSize: 22
    },
    link: {
        textDecoration: 'none',
        marginLeft: 10,
        color: 'white'
    }
}))

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(AuthContext);

    const classes = useStyles();

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

    return (
        <div className={classes.login}>
            <div className={classes.wrapper}>
                <img
                    className={classes.logo}
                    src={logo}
                    alt='logo'
                />
            </div>

            <div className={classes.container}>
                <form className={classes.form}>
                    <Typography align='center' variant='h3'>Sign In</Typography>
                    <input
                        className={classes.input}
                        type='email'
                        placeholder='Email or phone number'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={classes.input}
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        className={classes.button}
                        variant='contained'
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                    <Link to='/register' className={classes.link}>
                        <Typography align='center' variant='h6'>New Member? Sign up now.</Typography>
                    </Link>
                    <Typography align='center' variant='subtitle1'>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot
                    </Typography>
                </form>
            </div>
        </div>
    );
};

export default Login;