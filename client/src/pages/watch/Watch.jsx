import { makeStyles } from '@material-ui/core/styles';
import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';
import React from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    watch: {
        width: '100vw',
        height: '100vh'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    back: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        cursor: 'pointer',
        zIndex: 2
    }
}));

const Watch = () => {
    const location = useLocation();
    const { movie } = location || {};

    const classes = useStyles();

    return (
        <div className={classes.watch}>
            <Link className={classes.link} to='/'>
                <div className={classes.back}>
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>

            <ReactPlayer width='100%' height='100%' playing controls url={movie.video} />
        </div>
    );
};

export default Watch;
