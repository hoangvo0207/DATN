import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createMovie } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';

const useStyles = makeStyles(() => ({
  newMovie: {
    flex: 4,
    padding: 20
  },
  movieTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  paper: {
    width: '100%',
    marginLeft: 5,
    marginTop: 20,
    backgroundColor: '#491b1d',
    color: 'white',
    borderRadius: 10
  },
  addMovieItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },
  textField: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  formControl: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  button: {
    margin: '10px 0px 20px 20px',
    borderRadius: 10,
    backgroundColor: '#b96a59',
    width: 150,
    height: 50,
    color: 'white'
  }
}));

const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [series, setSeries] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const history = useHistory();

  const classes = useStyles();

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }

  const handleSeries = (e) => {
    const value = e.target.value;
    setSeries(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    history.push('/movies');
  }

  return (
    <Grid container spacing={3} className={classes.newMovie}>
      <Grid item xs={12}>
        <Typography variant='h4' className={classes.movieTitle}>
          New Movie
        </Typography>

        <Paper elevation={5} className={classes.paper}>
          <form>
            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Title</Typography>
              <TextField
                name='title'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Description</Typography>
              <TextField
                name='desc'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Image</Typography>
              <TextField
                name='img'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Title Image</Typography>
              <TextField
                name='imgTitle'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Thumbnail Image</Typography>
              <TextField
                name='imgSm'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Year</Typography>
              <TextField
                name='year'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Limit</Typography>
              <TextField
                name='limit'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Genre</Typography>
              <TextField
                name='genre'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Is Series?</Typography>
              <FormControl className={classes.formControl}>
                <Select
                  id='isSeries'
                  name='isSeries'
                  variant='outlined'
                  value={series}
                  onChange={handleSeries}
                >
                  <MenuItem value='false'>No</MenuItem>
                  <MenuItem value='true'>Yes</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Trailer</Typography>
              <TextField
                name='trailer'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addMovieItem}>
              <Typography variant='body1'>Video</Typography>
              <TextField
                name='video'
                variant='outlined'
                fullWidth
                className={classes.textField}
                onChange={handleChange}
              />
            </div>

            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={handleSubmit}
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
