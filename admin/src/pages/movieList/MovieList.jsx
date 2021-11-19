import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteMovie, getMovies } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './movieList.scss';

const MovieList = () => {
  const { movies, findMovie, dispatch } = useContext(MovieContext);

  const history = useHistory();

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const handleFindMovie = (movieId) => {
    findMovie(movieId);
    history.push(`/movies/${movieId}`);
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 300 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 250,
      renderCell: (params) => {
        return (
          <div className='movieListItem'>
            <img className='movieListImg' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'year', headerName: 'Year', width: 150 },
    { field: 'limit', headerName: 'Limit', width: 150 },
    { field: 'isSeries', headerName: 'Series', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <IconButton onClick={handleFindMovie.bind(this, params.row._id)}>
              <EditIcon style={{ color: green[500] }} />
            </IconButton>
            <DeleteOutline
              className='movieListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className='movieList'>
      <Link to='/newMovie' style={{ textDecoration: 'none' }}>
        <Button className='createButton' variant='contained' color='primary'>
          Create
        </Button>
      </Link>

      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default MovieList;
