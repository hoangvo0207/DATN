import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createMovie } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './newMovie.scss';

const NewMovie = () => {
  const [movie, setMovie] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    history.push('/movies');
  }

  return (
    <Grid container spacing={3} className='newMovie'>
      <Grid item xs={12}>
        <Typography variant='h4' className='title'>
          New Movie
        </Typography>

        <Paper elevation={5} style={{ width: '100%', marginLeft: 5, marginTop: 20 }}>
          <form>
            <div className='addMovieItem'>
              <label>Title</label>
              <TextField
                name='title'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Description</label>
              <TextField
                name='desc'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Image</label>
              <TextField
                name='img'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Title Image</label>
              <TextField
                name='imgTitle'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Thumbnail Image</label>
              <TextField
                name='imgSm'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Year</label>
              <TextField
                name='year'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Limit</label>
              <TextField
                name='limit'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Genre</label>
              <TextField
                name='genre'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Is Series?</label>
              <select name='isSeries' id='isSeries'>
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            </div>

            <div className='addMovieItem'>
              <label>Trailer</label>
              <TextField
                name='trailer'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <div className='addMovieItem'>
              <label>Video</label>
              <TextField
                name='video'
                variant='outlined'
                fullWidth
                onChange={handleChange}
              />
            </div>

            <Button
              variant='contained'
              color='primary'
              className='button'
              onClick={handleSubmit}
              style={{ marginLeft: 20, marginBottom: 20 }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewMovie;
