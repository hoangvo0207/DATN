import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from '../../constants/constant';
import logo from '../register/logo.PNG';

const useStyles = makeStyles(() => ({
    register: {
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
    input: {
        width: '50%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius: 5
    },
    inputContent: {
        flex: 9,
        height: '100%',
        border: 'none'
    },
    button: {
        flex: 3,
        height: '100%',
        backgroundColor: '#365972',
        border: 'none',
        color: 'white',
        fontSize: 22
    },
    link: {
        marginTop: 10,
        color: 'white',
        textDecoration: 'none'
    }
}));

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const history = useHistory();

    const classes = useStyles();

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
        <div className={classes.register}>
            <div className={classes.wrapper}>
                <img
                    className={classes.logo}
                    src={logo}
                    alt='logo'
                />
            </div>

            <div className={classes.container}>
                <Typography variant='h3'> Unlimited movie, TV shows, and more</Typography>
                <Typography variant='h4'>Watch anywhere. Cancel anytime</Typography>
                <Typography variant='subtitle1'>
                    Ready to watch? Enter your email to create your account
                </Typography>
                {
                    !email ? (
                        <div className={classes.input}>
                            <input
                                className={classes.inputContent}
                                type='email'
                                placeholder='Email Address'
                                ref={emailRef}
                            />

                            <Button
                                className={classes.button}
                                variant='contained'
                                onClick={handleRegister}>
                                Register
                            </Button>
                        </div>
                    ) : (
                        <form className={classes.input}>
                            <TextField
                                name='username'
                                variant='outlined'
                                className={classes.inputContent}
                                placeholder='Username'
                                ref={usernameRef}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                name='password'
                                type='password'
                                variant='outlined'
                                className={classes.inputContent}
                                placeholder='Password'
                                ref={passwordRef}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                className={classes.button}
                                variant='contained'
                                onClick={handleFinish}
                            >
                                Start
                            </Button>
                        </form>
                    )
                }
                <Link to='/login' className={classes.link}>
                    <Typography variant='h6'>Already have account? Sign In</Typography>
                </Link>
            </div>
        </div>
    );
};

export default Register;