import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useContext } from 'react';
import { logoutRequest } from '../../contexts/authContext/AuthAction';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import avatar from '../topbar/facebook_ava.jpg';
import './topbar.scss';

const Topbar = () => {
  const { dispatch } = useContext(AuthContext);

  return (
    <Paper elevation={3} className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>HoangAdmin</span>
        </div>
        <div className='topRight'>
          <img
            src={avatar}
            alt='avatar'
            className='topAvatar' />
          <div className='topbarIconContainer'>
            <IconButton onClick={() => dispatch(logoutRequest())}>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Topbar;
