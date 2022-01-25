import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FeedbackContext } from '../../contexts/feedbackContext/FeedbackContext';

const useStyles = makeStyles(() => ({
    feedbackItem: {
        flex: 4,
        padding: 20
    },
    feedbackTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    addFeedbackItem: {
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
    }
}));

const FeedbackItem = () => {
    const { feedback } = useContext(FeedbackContext);
    const { userFeedback } = feedback || {};

    const history = useHistory();

    const classes = useStyles();

    const handleCancel = () => {
        history.push('/feedbacks');
    };

    return (
        <Grid container spacing={3} className={classes.feedbackItem}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.feedbackTitle}>
                    Feedback Detail
                </Typography>

                <Card className={classes.cardRoot}>
                    <CardMedia
                        className={classes.media}
                        image={userFeedback.profilePic}
                        title='avatar'
                    />
                    <div className={classes.cardDetail}>
                        <CardContent className={classes.cardContent}>
                            <Typography component='h5' variant='h5'>
                                Created by {userFeedback.username}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Id: {feedback._id}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Movie: {feedback.movie}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Created At: {feedback.createdAt}
                            </Typography>
                            <Rating
                                value={feedback.rating}
                                size='small'
                                max={10}
                                readOnly
                            />
                        </CardContent>
                    </div>
                </Card>

                <Card elevation={10} className={classes.cardForm}>
                    <div className={classes.addFeedbackItem}>
                        <Typography variant='body1'>Username</Typography>
                        <TextField
                            name='username'
                            variant='outlined'
                            fullWidth
                            className={classes.textField}
                            value={userFeedback.username}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>

                    <div className={classes.addFeedbackItem} >
                        <Typography variant='body1'>Movie</Typography>
                        <TextField
                            name='movie'
                            variant='outlined'
                            fullWidth
                            className={classes.textField}
                            value={feedback.movie}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>

                    <div className={classes.addFeedbackItem} >
                        <Typography variant='body1'>Rating</Typography>
                        <Rating
                            name='rating'
                            value={feedback.rating}
                            size='large'
                            max={10}
                            readOnly
                        />
                    </div>

                    <div className={classes.addFeedbackItem} >
                        <Typography variant='body1'>Comment</Typography>
                        <TextField
                            name='comment'
                            variant='outlined'
                            fullWidth
                            className={classes.textField}
                            value={feedback.comment}
                            multiline
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>

                    <Button
                        variant='contained'
                        className={classes.button}
                        onClick={handleCancel}
                    >
                        Back
                    </Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default FeedbackItem;
