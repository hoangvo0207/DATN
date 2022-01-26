import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../home/components/navbar/Navbar';

const useStyles = makeStyles(() => ({
    info: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#00202e',
        position: 'relative'
    },
    wrapper: {
        padding: '20px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    ava: {
        height: 100,
        width: 100,
        borderRadius: '50%',
        margin: 'auto'
    },
    card: {
        width: 380,
        height: 500,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    input: {
        margin: 'auto',
        width: '90%'
    },
    button: {
        borderRadius: 5,
        width: 200,
        margin: 'auto',
        backgroundColor: '#0a344a',
        border: 'none',
        color: 'white',
        fontSize: 22
    },
}));

const UserInfo = () => {
    const history = useHistory();

    const classes = useStyles();

    const handleCancel = () => {
        history.push('/');
    };

    return (
        <div className={classes.info}>
            <div className={classes.wrapper}>
                <Navbar />
            </div>

            <div className={classes.container}>
                <form>
                    <Card className={classes.card}>
                        <img
                            className={classes.ava}
                            src='https://avatarfiles.alphacoders.com/798/thumb-1920-79894.jpg'
                            alt='avatar'
                        />
                        <TextField
                            name='email'
                            variant='outlined'
                            label='Email'
                            className={classes.input}
                            defaultValue='voxuanmaihoang@gmail.com'
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            name='username'
                            variant='outlined'
                            label='Username'
                            className={classes.input}
                            defaultValue='Hoàng Võ'
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            name='profilePic'
                            variant='outlined'
                            label='Profile Picture'
                            className={classes.input}
                            defaultValue='https://avatarfiles.alphacoders.com/798/thumb-1920-79894.jpg'
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <Button
                            className={classes.button}
                            variant='contained'
                            onClick={handleCancel}
                        >
                            Save
                        </Button>
                    </Card>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;