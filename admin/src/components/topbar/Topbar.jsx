import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useContext } from 'react';
import { logoutRequest } from '../../contexts/authContext/AuthAction';
import { AuthContext } from '../../contexts/authContext/AuthContext';
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
            src='https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/150545001_2211912815607337_523701711744111415_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=R-ce2Bn8FywAX-Xtcpk&_nc_ht=scontent.fdad3-4.fna&oh=57dcb79f93ce67cfe302ce84892aa2d7&oe=61ADD47E'
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
