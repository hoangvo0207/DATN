import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const useStyles = makeStyles(() => ({
    emptyFirst: {
        backgroundColor: '#00202e',
        height: 125
    },
    root: {
        backgroundColor: '#00202e'
    },
    paper: {
        width: '75%',
        margin: 'auto',
    },
    grid: {
        height: 590
    },
    img: {
        height: 590,
        width: '85%',
        borderRadius: 5
    },
    content: {
        padding: 20
    },
    play: {
        width: 200,
        display: 'flex',
        fontSize: 18,
        margin: '16px 10px 16px 0px',
        backgroundColor: '#0a344a',
        color: 'white'
    },
    link: {
        textDecoration: 'none',
        color: '#0000008A'
    },
    text: {
        width: 520,
        fontSize: 14,
        marginTop: 16
    },
    tags: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontStyle: 'italic'
    },
    emptyLast: {
        backgroundColor: '#00202e',
        height: 70
    },
    icon: {
        marginLeft: 50
    }
}));

const ListItemDetail = () => {
    const location = useLocation();
    const { movie } = location || {};
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <div className={classes.emptyFirst}></div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent='center' className={classes.grid}>
                        <Grid item xs={12} md={6}>
                            <img src={movie.img} alt='movie-img' className={classes.img} />
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.content}>
                            <Typography className={classes.title} variant='h3' color='textSecondary'>
                                {movie.title}
                            </Typography>
                            <Link className={classes.link} to={{ pathname: '/watch', movie: movie }}>
                                <Button className={classes.play} variant='contained'>
                                    Play
                                </Button>
                                Rating:
                                <Rating
                                    value={7}
                                    size='small'
                                    max={10}
                                    readOnly
                                />
                            </Link>
                            <div>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    Genre: {movie.genre}
                                </Typography>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    Type: {movie.isSeries ? 'Series' : 'Movie'}
                                </Typography>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    Limit: {movie.limit}+
                                </Typography>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    Year: {movie.year}
                                </Typography>
                                <div className={classes.tags}>
                                    <LocalOfferIcon /> {movie.genre}
                                    <AccessTimeIcon className={classes.icon} /> {movie.createdAt}
                                </div>
                                <TextField
                                    id='outlined-basic'
                                    label='Description'
                                    variant='outlined'
                                    rows={10}
                                    multiline
                                    className={classes.text}
                                    defaultValue={movie.desc}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <div className={classes.emptyLast}></div>
        </React.Fragment>
    );
};

export default ListItemDetail;