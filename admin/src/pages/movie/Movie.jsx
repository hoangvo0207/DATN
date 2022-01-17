import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateMovie } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';

const useStyles = makeStyles(() => ({
    movieItem: {
        flex: 4,
        padding: 20
    },
    movieTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    addMovieItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    cardRoot: {
        display: 'flex',
        marginTop: 20,
        borderRadius: 10
    },
    cardDetail: {
        display: 'flex',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cardForm: {
        display: 'block',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#491b1d',
        color: 'white'
    },
    media: {
        width: 250,
        height: 250
    },
    textField: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#743a36',
        width: 150,
        height: 50,
        color: 'white'
    },
    cancel: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#b96a59',
        width: 150,
        height: 50,
        color: 'white'
    }
}));

const Movie = () => {
    const { movie, dispatch } = useContext(MovieContext);

    const [updatedMovie, setUpdatedMovie] = useState(movie);

    const history = useHistory();

    const classes = useStyles();

    const handleChange = (e) => {
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(updatedMovie, dispatch);
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
        })
        history.push('/movies');
    };

    const handleCancel = () => {
        history.push('/movies');
    };

    return (
        <Grid container spacing={3} className={classes.movieItem}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.movieTitle}>
                    Update Movie
                </Typography>

                <Card className={classes.cardRoot}>
                    <CardMedia
                        className={classes.media}
                        image={updatedMovie.img}
                        title='movie-image'
                    />
                    <div className={classes.cardDetail}>
                        <CardContent className={classes.cardContent}>
                            <Typography component='h5' variant='h5'>
                                {updatedMovie.title}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Id: {updatedMovie._id}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Genre: {updatedMovie.genre}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Year: {updatedMovie.year}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Limit: {updatedMovie.limit}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>

                <Card elevation={10} className={classes.cardForm}>
                    <form>
                        <div className={classes.addMovieItem}>
                            <Typography variant='body1'>Title</Typography>
                            <TextField
                                name='title'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Description</Typography>
                            <TextField
                                name='desc'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.desc}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Image</Typography>
                            <TextField
                                name='img'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.img}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Title Image</Typography>
                            <TextField
                                name='imgTitle'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.imgTitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Thumbnail Image</Typography>
                            <TextField
                                name='imgSm'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.imgSm}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Year</Typography>
                            <TextField
                                name='year'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.year}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Limit</Typography>
                            <TextField
                                name='limit'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.limit}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Is Series</Typography>
                            <TextField
                                name='isSeried'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.isSeried ? 'Series' : 'Movies'}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Genre</Typography>
                            <TextField
                                name='genre'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.genre}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Video</Typography>
                            <TextField
                                name='video'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedMovie.video}
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            variant='contained'
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>

                        <Button
                            variant='contained'
                            className={classes.cancel}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Movie;
