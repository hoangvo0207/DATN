import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { createFeedback, updateFeedback } from '../../feedbackContext/apiCall';
import { FeedbackContext } from '../../feedbackContext/FeedbackContext';
import Navbar from '../home/components/navbar/Navbar';

const useStyles = makeStyles(() => ({
    feedback: {
        backgroundColor: '#00202e',
        overflow: 'hidden',
        marginTop: 70
    },
    newFeedback: {
        flex: 4,
        padding: 20
    },
    feedbackTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        color: 'white'
    },
    form: {
        color: 'white',
        height: 600
    },
    addFeedbackItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    textField: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    rating: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 120,
        width: '21%',
        alignItems: 'center'
    },
    button: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#365972',
        width: 150,
        height: 50,
        color: 'white'
    },
    cancel: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#9fafbf',
        width: 150,
        height: 50,
        color: 'white'
    }
}));

const FeedbackItemDetail = () => {
    const { dispatch } = useContext(FeedbackContext);
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const { feedback } = location || {};
    const [updatedRating, setUpdatedRating] = useState(feedback.rating);
    const [updatedFeedback, setUpdatedFeedback] = useState(feedback);

    const history = useHistory();

    const classes = useStyles();

    const handleChange = (e) => {
        setUpdatedFeedback({
            ...updatedFeedback,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFeedback(updatedFeedback, dispatch);
        setUpdatedFeedback({
            ...updatedFeedback,
            [e.target.name]: e.target.value
        })
        history.push('/feedbacks');
    };

    const handleCancel = () => {
        history.push('/feedbacks');
    };

    return (
        <div className={classes.feedback}>
            <Navbar />
            <Grid container spacing={3} className={classes.newFeedback}>
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.feedbackTitle}>
                        Update Your Feedback
                    </Typography>

                    <form className={classes.form}>
                        <div className={classes.addFeedbackItem}>
                            <Typography variant='body1'>Username</Typography>
                            <TextField
                                name='username'
                                variant='outlined'
                                fullWidth
                                disabled
                                defaultValue={user.username}
                                className={classes.textField}
                            />
                        </div>

                        <div className={classes.addFeedbackItem}>
                            <Typography variant='body1'>Movie</Typography>
                            <TextField
                                name='movie'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={feedback.movie}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addFeedbackItem}>
                            <Typography variant='body1'>Rating</Typography>
                            <Rating
                                name='rating'
                                value={updatedRating}
                                className={classes.rating}
                                size='large'
                                max={10}
                                onChange={(event, newValue) => {
                                    setUpdatedRating(newValue);
                                    handleChange(event);
                                }}
                            />
                        </div>

                        <div className={classes.addFeedbackItem}>
                            <Typography variant='body1'>Comment</Typography>
                            <TextField
                                name='comment'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={feedback.comment}
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

                        <Button
                            variant='contained'
                            className={classes.cancel}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default FeedbackItemDetail;
