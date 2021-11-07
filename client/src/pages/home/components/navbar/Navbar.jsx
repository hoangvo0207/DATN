import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Notifications from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='container'>
                <div className='left'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
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
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img
                        src='https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/150545001_2211912815607337_523701711744111415_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=st8Wj-gtYJIAX_Hal61&_nc_ht=scontent.fdad3-4.fna&oh=8e879c8350d19b6b355c2dc90d6fd76f&oe=61A5EB7E'
                        alt='' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;