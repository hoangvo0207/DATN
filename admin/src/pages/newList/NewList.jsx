import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createList } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';
import { getMovies } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './newList.scss';

const NewList = () => {
    const [list, setList] = useState(null);
    const history = useHistory();

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        history.push('/lists');
    }

    return (
        <div className='newList'>
            <h1 className='addListTitle'>New Movie</h1>
            <form className='addListForm'>
                <div className='addListItem'>
                    <label>Title</label>
                    <input type='text' placeholder='John Wick' name='title' onChange={handleChange} />
                </div>

                <div className='addListItem'>
                    <label>Genre</label>
                    <input type='text' placeholder='Genre' name='genre' />
                </div>

                <div className='addListItem'>
                    <label>Type</label>
                    <select name='type' id='type' onChange={handleChange}>
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>
                    </select>
                </div>

                <div className='addListItem'>
                    <label>Content</label>
                    <select multiple name='content' id='type' onChange={handleSelect}>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>{movie.title}</option>
                        ))}
                    </select>
                </div>

                <button className='addListButton' onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
};

export default NewList;
