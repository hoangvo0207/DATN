import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import { createFeedback } from '../../contexts/feedbackContext/apiCall';
import { FeedbackContext } from '../../contexts/feedbackContext/FeedbackContext';
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

const NewFeedback = () => {
    const [feedback, setFeedback] = useState(null);
    const [rating, setRating] = useState(0);

    const { dispatch } = useContext(FeedbackContext);
    const { user } = useContext(AuthContext);

    const history = useHistory();

    const classes = useStyles();

    const handleChange = (e) => {
        const value = e.target.value;
        setFeedback({
            ...feedback,
            userFeedback: {
                userId: user._id,
                username: user.username,
                profilePic: user.profilePic
            },
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createFeedback(feedback, dispatch);
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
                        New Feedback
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
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addFeedbackItem}>
                            <Typography variant='body1'>Rating</Typography>
                            <Rating
                                name='rating'
                                value={rating}
                                className={classes.rating}
                                size='large'
                                max={10}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
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

export default NewFeedback;
