import { createContext, useReducer } from 'react';
import MovieReducer from './MovieReducer';

const INITIAL_STATE = {
    movies: [],
    movie: null,
    isLoading: false,
    error: false
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    const findMovie = movieId => {
        const movie = state.movies.find(movie => movie._id === movieId);
        dispatch({
            type: 'FIND_MOVIE',
            payload: movie
        })
    };

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                movie: state.movie,
                isLoading: state.isLoading,
                error: state.error,
                findMovie,
                dispatch
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}
