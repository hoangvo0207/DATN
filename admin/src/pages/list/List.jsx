import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteList, getLists } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';
import './list.scss';

const List = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
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
          <>
            <Link to={{ pathname: '/lists/' + params.row._id, listItem: params.row }}>
              <IconButton>
                <EditIcon style={{ color: green[500] }} />
              </IconButton>
            </Link>
            <DeleteOutline
              className='listDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='list'>
      <Link to='/newList' style={{ textDecoration: 'none' }}>
        <Button className='createButton' variant='contained' color='primary'>
          Create
        </Button>
      </Link>

      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default List;
