import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Rating from '@material-ui/lab/Rating';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getFeedbacks } from '../../contexts/feedbackContext/apiCall';
import { FeedbackContext } from '../../contexts/feedbackContext/FeedbackContext';

const useStyles = makeStyles(() => ({
    feedbackList: {
        flex: 4,
        marginTop: 80,
        height: 625
    },
    feedbackListImg: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: 10,
        marginTop: 20
    }
}));

const Feedbacks = () => {
    const { feedbacks, findFeedback, dispatch } = useContext(FeedbackContext);

    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        getFeedbacks(dispatch);
    }, [dispatch]);

    const handleFindFeedback = (feedbackId) => {
        findFeedback(feedbackId);
        history.push(`/feedbacks/${feedbackId}`);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'userFeedback',
            headerName: 'Created by user',
            width: 250,
            renderCell: (params) => {
                return (
                    <div>
                        <img className={classes.feedbackListImg} src={params.row.userFeedback.profilePic} alt='' />
                        {params.row.userFeedback.username}
                    </div>
                );
            },
        },
        { field: 'movie', headerName: 'Movie', width: 200 },
        {
            field: 'rating',
            headerName: 'Rating',
            width: 200,
            renderCell: (params) => {
                return (
                    <Rating
                        name='rating'
                        value={params.row.rating}
                        size='small'
                        max={10}
                        readOnly
                    />
                );
            },
        },
        { field: 'comment', headerName: 'Comment', width: 150 },
        { field: 'createdAt', headerName: 'Created At', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <IconButton onClick={handleFindFeedback.bind(this, params.row._id)}>
                        <VisibilityIcon color='secondary' />
                    </IconButton>
                );
            },
        },
    ];

    return (
        <div className={classes.feedbackList}>
            <DataGrid
                rows={feedbacks}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    );
};

export default Feedbacks;
