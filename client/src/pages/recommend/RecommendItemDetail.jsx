import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../home/components/navbar/Navbar';

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
        textDecoration: 'none'
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

const RecommendItemDetail = () => {
    const location = useLocation();
    const { recommend } = location || {};
    const classes = useStyles();

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
                            <Link className={classes.link} to={{ pathname: '/watch', recommend: recommend }}>
                                <Button className={classes.play} variant='contained'>
                                    Play
                                </Button>
                            </Link>
                            <div>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    Score: {recommend.score}
                                </Typography>
                                <div className={classes.tags}>
                                    {/* <AccessTimeIcon className={classes.icon} /> {movie.createdAt} */}
                                </div>
                                {/* <TextField
                                    id='outlined-basic'
                                    label='Description'
                                    variant='outlined'
                                    rows={10}
                                    multiline
                                    disabled
                                    className={classes.text}
                                    defaultValue={movie.desc}
                                /> */}
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