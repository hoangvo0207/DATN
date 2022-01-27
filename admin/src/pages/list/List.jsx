import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteList, getLists } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';

const useStyles = makeStyles(() => ({
  list: {
    flex: 4,
    marginTop: 80,
    height: 625
  },
  link: {
    textDecoration: 'none'
  },
  listDelete: {
    color: 'red',
    cursor: 'pointer'
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#743a36',
    width: 150,
    height: 50,
    color: 'white',
    marginBottom: 10,
    marginLeft: 10
  },
  progress: {
    marginLeft: '50%',
    marginTop: '20%',
    color: '#491B1D'
  }
}));

const List = () => {
  const { lists, findList, isLoading, dispatch } = useContext(ListContext);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const handleFindList = (listId) => {
    findList(listId);
    history.push(`/lists/${listId}`);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 300 },
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'genre', headerName: 'Genre', width: 200 },
    { field: 'type', headerName: 'Type', width: 200 },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <IconButton onClick={handleFindList.bind(this, params.row._id)}>
              <EditIcon style={{ color: green[500] }} />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.row._id)}>
              <DeleteOutline className={classes.listDelete} />
            </IconButton>
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className={classes.list}>
      {
        isLoading ?
          <CircularProgress className={classes.progress} />
          :
          <React.Fragment>
            <Link to='/newList' className={classes.link}>
              <Button className={classes.button} variant='contained'>
                Create
              </Button>
            </Link>

            <DataGrid
              rows={lists}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
              getRowId={row => row._id}
            />
          </React.Fragment>
      }
    </div>
  );
};

export default List;
