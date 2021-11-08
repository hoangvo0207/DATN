import Typography from '@material-ui/core/Typography';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PlayArrow from '@material-ui/icons/PlayArrow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../../../constants/constant';
import './featured.scss';

const Featured = (props) => {
    const { type } = props;
    const [featured, setFeatured] = useState({});
    console.log({featured})

    useEffect(() => {
        const getFeaturedMovie = async () => {
            try {
                const response = await axios.get(`${apiUrl}/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODM1ZWM3NjJlYzQyNWVjMDUwMzdlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjI3Njc2OSwiZXhwIjoxNjM2NzA4NzY5fQ.lMy7Bg6YcJP6h_9ff_OWhcV-MHYA4iLlj8ux04lJ1mc"
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

                    <select className='select' name='genre' id='genre'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                src={featured.img}
                alt=''
            />

            <div className='info'>
                <Typography variant='h1'>{featured.title}</Typography>

                <span className='desc'>
                    {featured.desc}
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