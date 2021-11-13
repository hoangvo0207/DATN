import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteMovie, getMovies } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './movieList.css';

const MovieList = () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='movieListItem'>
            <img className='movieListImg' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'Year', width: 120 },
    { field: 'limit', headerName: 'Limit', width: 120 },
    { field: 'isSeries', headerName: 'Series', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: '/movies/' + params.row._id, movie: params.row }}>
              <button className='movieListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='movieListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='movieList'>
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