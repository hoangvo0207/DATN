import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';
import React from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';
import './watch.scss';

const Watch = () => {
    const location = useLocation();
    const { movie } = location || {};

    return (
        <div className='watch'>
            <Link className='link' to='/'>
                <div className='back'>
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>

            <ReactPlayer width='100%' height='100%' playing controls url={movie.video} />
        </div>
    );
};

export default Watch;
