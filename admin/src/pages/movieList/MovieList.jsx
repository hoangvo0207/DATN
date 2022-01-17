import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteMovie, getMovies } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';

const useStyles = makeStyles(() => ({
  movieList: {
    flex: 4,
    marginTop: 80,
    height: 625
  },
  movieListImg: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 10,
    marginTop: 20
  },
  movieListDelete: {
    color: 'red',
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#743a36',
    width: 150,
    height: 50,
    color: 'white',
    marginBottom: 10
  }
}));

const MovieList = () => {
  const { movies, findMovie, dispatch } = useContext(MovieContext);

  const history = useHistory();

  const classes = useStyles();

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
      width: 420,
      renderCell: (params) => {
        return (
          <div>
            <img className={classes.movieListImg} src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'year', headerName: 'Year', width: 150 },
    { field: 'limit', headerName: 'Limit', width: 150 },
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
              className={classes.movieListDelete}
              onClick={() => handleDelete(params.row._id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className={classes.movieList}>
      <Link to='/newMovie' className={classes.link}>
        <Button className={classes.button} variant='contained'>
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
