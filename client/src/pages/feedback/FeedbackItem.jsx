import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { green, red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Rating from '@material-ui/lab/Rating';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: 368,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    content: {
        color: 'white'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    avatar: {
        backgroundColor: red[500]
    },
    text: {
        width: '100%',
        marginTop: 10
    }
}));

const FeedbackItem = (props) => {
    const { feedback, handleDelete } = props || {};
    const { userFeedback } = feedback || {};
    const { user } = useContext(AuthContext);

    const classes = useStyles();

    return (
        <Card elevation={16} className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt='avatar' src={userFeedback.profilePic} />
                }
                action={
                    <React.Fragment>
                        <Link className={classes.link} to={{ pathname: '/feedbacks/detail', feedback: feedback }}>
                            <IconButton>
                                {
                                    user.username === userFeedback.username
                                        ? <EditIcon style={{ color: green[500] }} />
                                        : <EditIcon color='disabled' />
                                }
                            </IconButton>
                        </Link>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon color={user.username === userFeedback.username ? 'secondary' : 'disabled'} />
                        </IconButton>
                    </React.Fragment>
                }
                title={userFeedback.username}
                subheader={feedback.createdAt}
            />

            <CardContent>
                <Typography variant='h6' color='textSecondary'>
                    Movie: {feedback.movie}
                </Typography>
                <TextField
                    id='outlined-basic'
                    label='Comment'
                    variant='outlined'
                    rows={7}
                    multiline
                    disabled
                    className={classes.text}
                    defaultValue={feedback.comment}
                />
            </CardContent>

            <CardActions>
                <Typography variant='h6' color='textSecondary'>
                    Rating:
                </Typography>
                <Rating
                    name='rating'
                    value={feedback.rating}
                    size='large'
                    max={10}
                    readOnly
                />
            </CardActions>
        </Card>
    );
};

export default FeedbackItem;