import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecommendContext } from '../../contexts/recommendContext/RecommendContext';

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
    cancel: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#b96a59',
        width: 150,
        height: 50,
        color: 'white'
    }
}));

const Recommend = () => {
    const { recommend } = useContext(RecommendContext);

    const history = useHistory();

    const classes = useStyles();

    const handleCancel = () => {
        history.push('/recommends');
    }

    return (
        <Grid container spacing={3} className={classes.movieItem}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.movieTitle}>
                    Update List
                </Typography>

                <Card className={classes.cardRoot}>
                    <CardMedia
                        className={classes.media}
                        image={recommend.image}
                        title='movie-image'
                    />
                    <div className={classes.cardDetail}>
                        <CardContent className={classes.cardContent}>
                            <Typography component='h5' variant='h5'>
                                {recommend.title}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Id: {recommend._id}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Score: {recommend.score}
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
                                disabled
                                className={classes.textField}
                                value={recommend.title}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Score</Typography>
                            <TextField
                                name='score'
                                variant='outlined'
                                fullWidth
                                disabled
                                className={classes.textField}
                                value={recommend.score}
                            />
                        </div>

                        <div className={classes.addMovieItem} >
                            <Typography variant='body1'>Image</Typography>
                            <TextField
                                name='image'
                                variant='outlined'
                                fullWidth
                                disabled
                                className={classes.textField}
                                value={recommend.image}
                            />
                        </div>

                        <Button
                            variant='contained'
                            className={classes.cancel}
                            onClick={handleCancel}
                        >
                            Back
                        </Button>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Recommend;
