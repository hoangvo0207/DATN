import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StartIcon from '@material-ui/icons/Star';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        marginTop: 70,
        backgroundColor: '#0c222f',
    },
    contentLeft: {
        margin: 'auto',
        marginTop: 50
    },
    contentRight: {
        color: 'white',
        marginTop: 70,
        textAlign: 'left',
    },
    contentMain: {
        marginTop: 20
    },
    img: {
        marginLeft: '35%',
        width: 500,
        height: 700,
        borderRadius: '5%'
    },
    button: {
        width: 200,
        height: 50,
        marginTop: 20
    },
    intro: {
        marginTop: 10
    }
}));

const ListItemDetail = () => {
    const location = useLocation();
    const { movie } = location || {};
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <Grid container justifyContent='center' className={classes.root} spacing={2}>
                <Grid item xs={12} md={6} className={classes.contentLeft}>
                    <img src={movie.img} alt='movie-img' className={classes.img} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.contentRight}>
                    <Typography variant='h2'>
                        {movie.title}
                    </Typography>
                    <div className={classes.intro}>
                        <StartIcon />
                        <StartIcon />
                        <StartIcon />
                        <StartIcon />
                        <StartIcon />
                        <LocalOfferIcon style={{ marginLeft: 50 }} /> {movie.genre}
                        <AccessTimeIcon style={{ marginLeft: 50 }} /> {movie.createdAt}
                    </div>
                    <Link className='link' to={{ pathname: '/watch', movie: movie }}>
                        <Button variant='contained' color='secondary' className={classes.button}>
                            Play
                        </Button>
                    </Link>
                    <div className={classes.contentMain}>
                        <Typography variant='subtitle1'>
                            Genre: {movie.genre}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Type: {movie.isSeries ? 'Series' : 'Movie'}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Limit: {movie.limit}+
                        </Typography>
                        <Typography variant='subtitle1'>
                            Year: {movie.year}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Description: {movie.desc}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ListItemDetail;