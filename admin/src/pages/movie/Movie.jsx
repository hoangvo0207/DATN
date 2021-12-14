import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateMovie } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './movie.scss';

const Movie = () => {
    const { movie, dispatch } = useContext(MovieContext);

    const [updatedMovie, setUpdatedMovie] = useState(movie);

    const history = useHistory();

    const handleChange = (e) => {
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(updatedMovie, dispatch);
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
        })
        history.push('/movies');
    }

    return (
        <Grid container spacing={3} className='movie'>
            <Grid item xs={12}>
                <Typography variant='h4' className='movieTitle'>
                    Update List
                </Typography>

                <Paper elevation={10} style={{ width: '100%', height: '90%', marginLeft: 5, marginTop: 20 }}>
                    <Paper elevation={3}>
                        <Card className='cardRoot'>
                            <CardMedia
                                className='media'
                                image={updatedMovie.img}
                                title='marvel'
                            />
                            <div className='cardDetail'>
                                <CardContent className='cardContent'>
                                    <Typography component='h5' variant='h5'>
                                        {updatedMovie.title}
                                    </Typography>
                                    <Typography component='subtitle1' variant='subtitle1'>
                                        Id: {updatedMovie._id}
                                    </Typography>
                                    <Typography component='subtitle1' variant='subtitle1'>
                                        Genre: {updatedMovie.genre}
                                    </Typography>
                                    <Typography component='subtitle1' variant='subtitle1'>
                                        Year: {updatedMovie.year}
                                    </Typography>
                                    <Typography component='subtitle1' variant='subtitle1'>
                                        Limit: {updatedMovie.limit}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Paper>

                    <Paper elevation={10} style={{ marginTop: 80 }}>
                        <form>
                            <div className='addMovieItem'>
                                <label>Title</label>
                                <TextField
                                    name='title'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Description</label>
                                <TextField
                                    name='desc'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.desc}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Image</label>
                                <TextField
                                    name='img'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.img}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Titile Image</label>
                                <TextField
                                    name='imgTitle'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.imgTitle}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Thumbnail Image</label>
                                <TextField
                                    name='imgSm'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.imgSm}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Year</label>
                                <TextField
                                    name='year'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.year}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Limit</label>
                                <TextField
                                    name='limit'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.limit}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Is Series</label>
                                <TextField
                                    name='isSeried'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.isSeried ? 'Series' : 'Movies'}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Genre</label>
                                <TextField
                                    name='genre'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.genre}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addMovieItem' >
                                <label>Video</label>
                                <TextField
                                    name='video'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedMovie.video}
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
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Movie;
