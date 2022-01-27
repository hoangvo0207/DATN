import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../home/components/navbar/Navbar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Rating from '@material-ui/lab/Rating';

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
        height: 90
    },
    icon: {
        marginLeft: 0
    }
}));

const RecommendItemDetail = () => {
    const location = useLocation();
    const { recommend } = location || {};
    const classes = useStyles();

    const description = `This movie is recommended based on the popularity of the movies in the near future, will be updated to broadcast on our website soon. The website has a content-based recommendation system with the specific score of this movie being ${recommend.score}`;

    return (
        <React.Fragment>
            <Navbar />
            <div className={classes.emptyFirst}></div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent='center' className={classes.grid}>
                        <Grid item xs={12} md={6}>
                            <img src={recommend.image} alt='movie-img' className={classes.img} />
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.content}>
                            <Typography className={classes.title} variant='h3' color='textSecondary'>
                                {recommend.title}
                            </Typography>
                            <Link className={classes.link}>
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
                                    Score: {recommend.score}
                                </Typography>
                                <div className={classes.tags}>
                                    <AccessTimeIcon className={classes.icon} /> 27/01/2022
                                </div>
                                <TextField
                                    variant='outlined'
                                    rows={10}
                                    multiline
                                    className={classes.text}
                                    defaultValue={description}
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

export default RecommendItemDetail;