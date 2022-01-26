import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Settings from '@material-ui/icons/Settings';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../../../../contexts/authContext/AuthAction';
import { AuthContext } from '../../../../contexts/authContext/AuthContext';
import facebook_ava from '../navbar/facebook_ava.jpg';
import logo from '../navbar/logo.PNG';

const useStyles = makeStyles(() => ({
    navScroll: {
        width: '100%',
        color: 'white',
        fontSize: 20,
        position: 'fixed',
        top: 0,
        zIndex: 999,
        backgroundColor: '#0a344a'
    },
    nav: {
        width: '100%',
        color: 'white',
        fontSize: 20,
        position: 'fixed',
        top: 0,
        zIndex: 999,
        backgroundColor: '#365972'
    },
    container: {
        padding: '0px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70
    },
    left: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: 60,
        borderRadius: '50%',
        marginTop: 5
    },
    right: {
        display: 'flex',
        alignItems: 'center'
    },
    ava: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        marginLeft: 8
    },
    link: {
        marginLeft: 5,
        marginRight: 15,
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'arial'
    },
    icon: {
        margin: '0px 15px',
        cursor: 'pointer'
    },
    account: {
        marginLeft: -5,
        marginTop: 5,
        cursor: 'pointer'
    }
}));

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

    const classes = useStyles();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? classes.navScroll : classes.nav}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <img
                        className={classes.logo}
                        src={logo}
                        alt='Logo'
                    />
                    <Link to='/' className={classes.link}>
                        <span className='span'>Home Page</span>
                    </Link>
                    <Link to='/series' className={classes.link}>
                        <span className='span'>Series</span>
                    </Link>
                    <Link to='/movies' className={classes.link}>
                        <span className='span'>Movies</span>
                    </Link>
                    <Link to='/feedbacks' className={classes.link}>
                        <span className='span'>Feedbacks</span>
                    </Link>
                    <Link to='/recommends' className={classes.link}>
                        <span className='span'>New and Popular</span>
                    </Link>
                </div>

                <div className={classes.right}>
                    <Typography variant='h6'>Hi, Hoang!</Typography>
                    <img
                        className={classes.ava}
                        src={facebook_ava}
                        alt='avatar'
                    />
                    <ExitToAppIcon className={classes.icon} onClick={() => dispatch(logoutRequest())} />
                    <Link to='/user' className={classes.link}>
                        <Settings className={classes.account} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;