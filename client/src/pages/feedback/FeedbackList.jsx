import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteFeedback, getFeedbacks } from '../../feedbackContext/apiCall';
import { FeedbackContext } from '../../feedbackContext/FeedbackContext';
import Navbar from '../home/components/navbar/Navbar.jsx';
import FeedbackItem from './FeedbackItem';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 80
    },
    feedback: {
        backgroundColor: '#00202e',
        overflow: 'hidden'
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#365972',
        width: 180,
        height: 50,
        color: 'white',
        marginBottom: 10
    }
}));

const FeedbackList = () => {
    const { feedbacks, dispatch } = useContext(FeedbackContext);

    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        getFeedbacks(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteFeedback(id, dispatch);
    };

    return (
        <div className={classes.feedback}>
            <Navbar />
            <div className={classes.root}>
                <Link to='/feedbacks/new' className={classes.link}>
                    <Button className={classes.button} variant='contained'>
                        Create Feedback
                    </Button>
                </Link>

                <Grid container spacing={3}>
                    {feedbacks.map((feedback) => (
                        <Grid item xs={6}>
                            <FeedbackItem feedback={feedback} handleDelete={handleDelete} />
                        </Grid>
                    )
                    )}
                </Grid>
            </div>
        </div>
    );
};

export default FeedbackList;