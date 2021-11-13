import Add from '@material-ui/icons/Add';
import PlayArrow from '@material-ui/icons/PlayArrow';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../../../constants/constant';
import './listItem.scss';

const ListItem = (props) => {
    const { movieId } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/movies/find/${movieId}`, {
                    headers: {
                        token: 'Bearer '+JSON.parse(localStorage.getItem('user')).accessToken
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
        <Link className='link' to={{ pathname: '/watch', movie: movie }}>
            <div
                className='listItem'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={movie.img}
                    alt='movie-image'
                />

                {isHovered && (
                    <React.Fragment>
                        <div className='itemInfo'>
                            <div className='icons'>
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpAltOutlined className='icon' />
                                <ThumbDownOutlined className='icon' />
                            </div>

                            <div className='itemInfoTop'>
                                <span>{movie.duration}</span>
                                <span className='limit'>+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>

                            <div className='desc'>
                                {movie.desc}
                            </div>

                            <div className='genre'>
                                {movie.genre}
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </Link>
    );
};

export default ListItem;