import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Notifications from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../../../../authContext/AuthAction';
import { AuthContext } from '../../../../authContext/AuthContext';
import './navbar.scss';
import logo from '../navbar/logo.PNG';
import facebook_ava from '../navbar/facebook_ava.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='container'>
                <div className='left'>
                    <img
                        style={{ height: 60, borderRadius: '50%', marginTop: 5 }}
                        src={logo}
                        alt='Logo'
                    />
                    <Link to='/' className='link'>
                        <span className='span'>Home Page</span>
                    </Link>
                    <Link to='/series' className='link'>
                        <span className='span'>Series</span>
                    </Link>
                    <Link to='/movies' className='link'>
                        <span className='span'>Movies</span>
                    </Link>
                    <Link to='/popular' className='link'>
                        <span className='span'>New and Popular</span>
                    </Link>
                    <Link to='/mylist' className='link'>
                        <span className='span'>My list</span>
                    </Link>
                </div>

                <div className='right'>
                    <Search className='icon' />
                    <span>Hi, Hoang!</span>
                    <Notifications className='icon' />
                    <img
                        src={facebook_ava}
                        alt='avatar' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span onClick={() => dispatch(logoutRequest())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;