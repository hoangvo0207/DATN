import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteUser, getUsers } from '../../contexts/userContext/apiCall';
import { UserContext } from '../../contexts/userContext/UserContext';

const useStyles = makeStyles(() => ({
  user: {
    flex: 4,
    marginTop: 80,
    height: 625
  },
  userImg: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 10
  },
  userDelete: {
    color: 'red',
    cursor: 'pointer'
  },
  progress: {
    marginLeft: '50%',
    marginTop: '20%',
    color: '#491B1D'
  }
}));

const UserList = () => {
  const { users, findUser, isLoading, dispatch } = useContext(UserContext);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const handleFindUser = (userId) => {
    findUser(userId);
    history.push(`/users/${userId}`);
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 300 },
    {
      field: 'profilePic',
      headerName: 'Profile Picture',
      width: 200,
      renderCell: (params) => {
        return (
          <img className={classes.userImg} src={params.row.profilePic} alt='' />
        );
      }
    },
    { field: 'username', headerName: 'Username', width: 250 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'isAdmin', headerName: 'Admin', width: 200 },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <IconButton onClick={handleFindUser.bind(this, params.row._id)}>
              <VisibilityIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.row._id)}>
              <DeleteOutline className={classes.userDelete} />
            </IconButton>
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className={classes.user}>
      {
        isLoading ?
          <CircularProgress className={classes.progress} />
          :
          <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={row => row._id}
          />
      }
    </div>
  );
};

export default UserList;
