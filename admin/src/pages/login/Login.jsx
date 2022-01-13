import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useState } from 'react';
import { login } from '../../contexts/authContext/apiCall';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import logo from '../login/logo.PNG';

const useStyles = makeStyles(() => ({
    login: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#310A0B',
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
        width: 300,
        height: 400,
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#743A36',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    input: {
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
    },
    button: {
        height: 48,
        borderRadius: 5,
        backgroundColor: '#310A0B',
        border: 'none',
        color: 'white',
        fontSize: 22
    }
}))

const Login = () => {
    const { isLoading, dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <Typography align='center' variant='h3'>Welcome, Admin!</Typography>
                    <TextField
                        name='email'
                        variant='outlined'
                        className={classes.input}
                        placeholder='Email or Phone Number'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        name='password'
                        type='password'
                        variant='outlined'
                        className={classes.input}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        className={classes.button}
                        variant='contained'
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    )
};

export default Login;