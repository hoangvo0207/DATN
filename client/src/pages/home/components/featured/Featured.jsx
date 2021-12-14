import Typography from '@material-ui/core/Typography';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PlayArrow from '@material-ui/icons/PlayArrow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../../../constants/constant';
import './featured.scss';

const Featured = (props) => {
    const { type, setGenre } = props;
    const [featured, setFeatured] = useState({});

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

            <img
                src='https://www.nme.com/wp-content/uploads/2020/09/Spider-Man-Suit.jpg'
                alt=''
            />

            <div className='info'>
                <Typography variant='h1'>Spider Man</Typography>

                <span className='desc'>
                    526 / 5000 Translation results Spider-Man revolves around the story of an extremely shy boy Peter Parker, was raised by his uncle from a young age to adulthood. One day, he and his class went to visit a spider research area, then Peter was bitten by a spider and made him comatose. When he woke up, he suddenly had a strange, extraordinary power. Peter used that power to do good deeds to help those in need and keep his identity a secret. However, he was about to face a formidable foe Norman Osborn.
                </span>

                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </button>

                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;