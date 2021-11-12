import { useContext, useEffect, useState } from "react";
import { createList } from "../../contexts/listContext/apiCall";
import { ListContext } from "../../contexts/listContext/ListContext";
import { createMovie, getMovies } from "../../contexts/movieContext/apiCall";
import { MovieContext } from "../../contexts/movieContext/MovieContext";
import "./newList.css";
import {useHistory} from 'react-router-dom';

export default function NewList() {
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
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" name="genre" />
                </div>
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="type" id="type" onChange={handleChange}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Content</label>
                    <select multiple name="content" id="type" onChange={handleSelect}>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>{movie.title}</option>
                        ))}
                    </select>
                </div>
                <button className="addProductButton" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
}
