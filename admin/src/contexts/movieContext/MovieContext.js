import { createContext, useReducer } from 'react';
import MovieReducer from './MovieReducer';

const INITIAL_STATE = {
    movies: [],
    isLoading: false,
    error: false
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                isLoading: state.isLoading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}
