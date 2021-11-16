import { useContext, useState } from 'react';
import { createMovie } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './newMovie.scss';

const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  }

  return (
    <div className='newMovie'>
      <h1 className='addMovieTitle'>New Movie</h1>
      <form className='addMovieForm'>
        <div className='addMovieItem'>
          <label>Image</label>
          <input type='file' id='img' name='img' onChange={handleChange} />
        </div>

        <div className='addMovieItem'>
          <label>Title Image</label>
          <input type='file' id='imgTitle' name='imgTitle' />
        </div>

        <div className='addMovieItem'>
          <label>Thumbnail Image</label>
          <input type='file' id='imgSm' name='imgSm' />
        </div>

        <div className='addMovieItem'>
          <label>Title</label>
          <input type='text' placeholder='John Wick' name='title' />
        </div>

        <div className='addMovieItem'>
          <label>Description</label>
          <input type='text' placeholder='description' name='description' onChange={handleChange} />
        </div>

        <div className='addMovieItem'>
          <label>Year</label>
          <input type='text' placeholder='Year' name='year' />
        </div>

        <div className='addMovieItem'>
          <label>Limit</label>
          <input type='text' placeholder='Limit' name='limit' />
        </div>

        <div className='addMovieItem'>
          <label>Genre</label>
          <input type='text' placeholder='Genre' name='genre' />
        </div>

        <div className='addMovieItem'>
          <label>Is Series?</label>
          <select name='active' id='active'>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>

        <div className='addMovieItem'>
          <label>Trailer</label>
          <input type='file' name='trailer' />
        </div>

        <div className='addMovieItem'>
          <label>Video</label>
          <input type='file' name='video' />
        </div>

        <button className='addMovieButton' onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
};

export default NewMovie;
