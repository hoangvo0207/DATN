import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteUser, getUsers } from '../../contexts/userContext/apiCall';
import { UserContext } from '../../contexts/userContext/UserContext';
import './userList.scss';

const UserList = () => {
  const { users, findUser, dispatch } = useContext(UserContext);

  const history = useHistory();

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
          <img className='userImg' src={params.row.profilePic} alt='' />
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
              <EditIcon style={{ color: green[500] }} />
            </IconButton>
            <DeleteOutline
              className='userDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className='user'>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default UserList;
