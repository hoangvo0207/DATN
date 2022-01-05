import Typography from '@material-ui/core/Typography';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PlayArrow from '@material-ui/icons/PlayArrow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../../../constants/constant';
import './featured.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '93%',
        margin: 'auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 500,
        height: 500
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    button: {
        display: 'flex'
    },
    play: {
        width: 200,
        display: 'flex',
        fontSize: 18,
        marginRight: 10,
        marginLeft: 20,
        marginBottom: 116,
        backgroundColor: '#0a344a',
        color: 'white'
    },
    info: {
        width: 200,
        display: 'flex',
        fontSize: 18,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 116,
        backgroundColor: '#9fafbf',
        color: 'white'
    }
}));


const Featured = (props) => {
    const { type, setGenre } = props;
    const [featured, setFeatured] = useState({});

    const classes = useStyles();

    useEffect(() => {
        const getFeaturedMovie = async () => {
            try {
                const response = await axios.get(`${apiUrl}/movies/random?type=${type}`, {
                    headers: {
                        token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
                    }
                }
                );
                setFeatured(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getFeaturedMovie();
    }, [type]);

    return (
        <React.Fragment>
            <div className='featured'>
                {type && (
                    <div className='category'>
                        <span>
                            {type === 'movies' ? 'Movies' : 'Series'}
                        </span>

                        <select className='select' name='genre' id='genre' onChange={e => setGenre(e.target.value)}>
                            <option>Genre</option>
                            <option value='action'>Action and Sci-fi</option>
                            <option value='drama'>Drama</option>
                            <option value='horror'>Horror</option>
                            <option value='animation'>Animation</option>
                            <option value='comedy'>Comedy</option>
                        </select>
                    </div>
                )}
            </div>

            <Card className={classes.root}>
                <div>
                    <CardMedia
                        className={classes.cover}
                        image='https://cf.shopee.co.id/file/8fc9e767eaf1657b5be8309ebe57760d'
                        title="Spider Man"
                    />
                </div>

                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography align='center' variant='h3'>
                            Vincenzo 2021
                        </Typography>
                        <Typography style={{marginTop: 20}} variant='subtitle1' color='textSecondary'>
                            Vincenzo Cassano is a Korean who was adopted as a child by an Italian family.
                            He possesses unparalleled charisma and excellent negotiation skills,
                            his only purpose is to take revenge in the name of the Italian Mafia boss.
                            Originally, Vincenzo did not want to return to Korea, his homeland with a bloody and painful past,
                            but he was forced to return when he discovered a cruel gang with deep roots from Korea.
                            Here, a talented female lawyer Hong Cha Young (played by Jeon Yeo Bin) and trainee Jang Joon Woo (played by Taecyeon) combine to investigate mysterious cases that have not been answered for a period of time.
                            long. In general, Vincenzo film possesses highly appreciated content and above all, this is a film that marks the return of famous actor Song Joong Ki after his horse fall in Arthdal ​​Chronicles.
                            According to the producer, the budget for each Vincenzo episode is up to 4 billion VND (about 200 million won).
                        </Typography>
                    </CardContent>

                    <div className={classes.controls}>
                        <Button className={classes.play} variant='contained'>
                            Play
                        </Button>

                        <Button className={classes.info} variant='contained'>
                            Info
                        </Button>
                    </div>
                </div>
            </Card>
        </React.Fragment>
    );
};

export default Featured;