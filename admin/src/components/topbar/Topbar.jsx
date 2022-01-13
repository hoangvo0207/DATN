import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useContext, useState } from 'react';
import { logoutRequest } from '../../contexts/authContext/AuthAction';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import facebook_ava from '../topbar/facebook_ava.jpg';
import logo from '../topbar/logo.PNG';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  navScroll: {
    width: '100%',
    color: 'white',
    fontSize: 20,
    position: 'fixed',
    top: 0,
    zIndex: 999,
    backgroundColor: '#310A0B',
    borderRadius: 10
  },
  nav: {
    width: '100%',
    color: 'white',
    fontSize: 20,
    position: 'fixed',
    top: 0,
    zIndex: 999,
    backgroundColor: '#491B1D',
    borderRadius: 10
  },
  container: {
    padding: '0px 20px',
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
    marginLeft: 8,
    marginRight: 15,
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'arial'
  },
  icon: {
    margin: '0px 15px',
    cursor: 'pointer'
  }
}));

const Topbar = () => {
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
          <Link to='/users' className={classes.link}>
            <span className='span'>Users</span>
          </Link>
          <Link to='/lists' className={classes.link}>
            <span className='span'>Lists</span>
          </Link>
          <Link to='/movies' className={classes.link}>
            <span className='span'>Movies</span>
          </Link>
          <Link to='/recommends' className={classes.link}>
            <span className='span'>Recommends</span>
          </Link>
        </div>

        <div className={classes.right}>
          <Typography variant='h6'>Hi, Admin!</Typography>
          <img
            className={classes.ava}
            src={facebook_ava}
            alt='avatar'
          />
          <ExitToAppIcon className={classes.icon} onClick={() => dispatch(logoutRequest())} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
