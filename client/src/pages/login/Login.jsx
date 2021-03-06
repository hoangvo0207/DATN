import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../contexts/authContext/apiCall';
import { AuthContext } from '../../contexts/authContext/AuthContext';
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
        borderRadius: 10,
        backgroundColor: '#5e778f',
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

    const { error, dispatch } = useContext(AuthContext);

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
                    {
                        error ?
                            <TextField
                                error
                                name='email'
                                variant='outlined'
                                placeholder='Email or Phone Number'
                                helperText='Incorrect Email Address or Password'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            : <TextField
                                name='email'
                                variant='outlined'
                                className={classes.input}
                                placeholder='Email or Phone Number'
                                onChange={(e) => setEmail(e.target.value)}
                            />

                    }
                    {
                        error ?
                            <TextField
                                error
                                name='password'
                                type='password'
                                variant='outlined'
                                placeholder='Password'
                                helperText='Incorrect Email Address or Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            : <TextField
                                name='password'
                                type='password'
                                variant='outlined'
                                className={classes.input}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    }
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