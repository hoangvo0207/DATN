import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../../../constants/constant';

const useStyles = makeStyles(() => ({
    root: {
        width: 250,
        height: 312,
        marginRight: 20,
        backgroundColor: '#0a344a'
    },
    content: {
        color: 'white'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

const ListItem = (props) => {
    const { movieId } = props;
    const [movie, setMovie] = useState({});

    const classes = useStyles();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/movies/find/${movieId}`, {
                    headers: {
                        token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
                    }
                }
                );
                setMovie(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovie();
    }, [movieId]);

    return (
        <Link className={classes.link} to={{ pathname: '/detail', movie: movie }}>
            <Card elevation={16} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt='Movie Image'
                        height='200'
                        image={movie.img}
                        title='Movie Image'
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant='h6'>
                            {movie.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default ListItem;