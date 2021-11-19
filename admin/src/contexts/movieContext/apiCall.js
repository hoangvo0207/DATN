import axios from 'axios';
import { apiUrl } from '../../constants/constant';
import { createMovieFailure, createMovieRequest, createMovieSuccess, deleteMovieFailure, deleteMovieRequest, deleteMovieSuccess, getMoviesFailure, getMoviesRequest, getMoviesSuccess, updateMovieFailure, updateMovieRequest, updateMovieSuccess } from "./MovieAction";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesRequest());
    try {
        const respone = await axios.get(`${apiUrl}/movies`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(getMoviesSuccess(respone.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
};

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieRequest());
    try {
        const respone = await axios.post(`${apiUrl}/movies`, movie, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(createMovieSuccess(respone.data));
    } catch (error) {
        dispatch(createMovieFailure());
    }
};

export const updateMovie = async (updatedMovie, dispatch) => {
    dispatch(updateMovieRequest());
    try {
        const response = await axios.put(`${apiUrl}/movies/${updatedMovie._id}`,
            updatedMovie,
            {
                headers: {
                    token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
                },
            }
        );
        dispatch(updateMovieSuccess(response.data));
    } catch (error) {
        dispatch(updateMovieFailure());
    }
};

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieRequest());
    try {
        await axios.delete(`${apiUrl}/movies/${id}`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(deleteMovieSuccess(id));
    } catch (error) {
        dispatch(deleteMovieFailure());
    }
};