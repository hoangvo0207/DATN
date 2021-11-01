import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import Settings from '@material-ui/icons/Settings';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#0b0b0b',
        color: 'white',
        fontSize: 18,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 999
    },
    container: {
        paddingTop: 0,
        paddingLeft: 50,
        paddingRight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70
    },
    image: {
        height: 25,
        marginRight: 40
    },
    left: {
        display: 'flex',
        alignItems: 'center'
    },
    right: {
        display: 'flex',
        alignItems: 'center'
    },
    span: {
        marginRight: 20,
        cursor: 'pointer'
    },
    icon: {
        margin: '0px 15px',
        cursor: 'pointer'
    },
    avatar: {
        height: 40,
        borderRadius: '50%',
        cursor: 'pointer'
    }
}))

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <img
                        className={classes.image}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="Logo"
                    />
                    <span className={classes.span}>Home Page</span>
                    <span className={classes.span}>Series</span>
                    <span className={classes.span}>Movies</span>
                    <span className={classes.span}>New and Popular</span>
                    <span className={classes.span}>My list</span>
                </div>

                <div className={classes.right}>
                    <Search className={classes.icon} />
                    <span>KID</span>
                    <Notifications className={classes.icon} />
                    <img
                        className={classes.avatar}
                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/150545001_2211912815607337_523701711744111415_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=st8Wj-gtYJIAX_Hal61&_nc_ht=scontent.fdad3-4.fna&oh=8e879c8350d19b6b355c2dc90d6fd76f&oe=61A5EB7E"
                        alt="" />
                    <Settings className={classes.icon} />
                    <KeyboardArrowRight className={classes.icon} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;