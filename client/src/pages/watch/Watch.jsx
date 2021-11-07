import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';
import React from 'react';
import ReactPlayer from 'react-player';
import './watch.scss';

const Watch = () => {
    return (
        <div className='watch'>
            <div className='back'>
                <ArrowBackOutlined />
                Home
            </div>

            <ReactPlayer width='100%' height='100%' playing controls url='https://youtu.be/aUZ-u-V99cw?t=1' />
        </div>
    );
};

export default Watch;
