import { Publish } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './movie.css';

const Movie = () => {
    const location = useLocation()
    const movie = location.movie;

    return (
        <div className='movie'>
            <div className='movieTitleContainer'>
                <h1 className='movieTitle'>Movie</h1>
                <Link to='/newMovie'>
                    <button className='movieAddButton'>Create</button>
                </Link>
            </div>

            <div className='movieTop'>
                <div className='movieTopRight'>
                    <div className='movieInfoTop'>
                        <img src={movie.img} alt='image-movie' className='movieInfoImg' />
                        <span className='movieName'>{movie.title}</span>
                    </div>
                    <div className='movieInfoBottom'>
                        <div className='movieInfoItem'>
                            <span className='movieInfoKey'>Id:</span>
                            <span className='movieInfoValue'>{movie._id}</span>
                        </div>
                        <div className='movieInfoItem'>
                            <span className='movieInfoKey'>Genre:</span>
                            <span className='movieInfoValue'>{movie.genre}</span>
                        </div>
                        <div className='movieInfoItem'>
                            <span className='movieInfoKey'>Year:</span>
                            <span className='movieInfoValue'>{movie.year}</span>
                        </div>
                        <div className='movieInfoItem'>
                            <span className='movieInfoKey'>Limit:</span>
                            <span className='movieInfoValue'>{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='movieBottom'>
                <form className='movieForm'>
                    <div className='movieFormLeft'>
                        <label>Movie Title</label>
                        <input type='text' placeholder={movie.title} />
                        <label>Year</label>
                        <input type='text' placeholder={movie.year} />
                        <label>Limit</label>
                        <input type='text' placeholder={movie.limit} />
                        <label>Trailer</label>
                        <input type='file' placeholder={movie.trailer} />
                        <label>Video</label>
                        <input type='file' placeholder={movie.video} />
                    </div>
                    <div className='movieFormRight'>
                        <div className='movieUpload'>
                            <img src={movie.title} />
                            <label for='file'>
                                <Publish />
                            </label>
                            <input type='file' id='file' style={{ display: 'none' }} />
                        </div>
                        <button className='movieButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Movie;
