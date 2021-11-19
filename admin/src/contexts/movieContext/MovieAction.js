export const getMoviesRequest = () => ({
    type: 'GET_MOVIES_REQUEST'
});

export const getMoviesSuccess = (movies) => ({
    type: 'GET_MOVIES_SUCCESS',
    payload: movies
});

export const getMoviesFailure = () => ({
    type: 'GET_MOVIES_FAILURE'
});

export const createMovieRequest = () => ({
    type: 'CREATE_MOVIE_REQUEST'
});

export const createMovieSuccess = (movie) => ({
    type: 'CREATE_MOVIE_SUCCESS',
    payload: movie
});

export const createMovieFailure = () => ({
    type: 'CREATE_MOVIE_FAILURE'
});

export const updateMovieRequest = () => ({
    type: 'UPDATE_MOVIE_START',
});

export const updateMovieSuccess = (movie) => ({
    type: 'UPDATE_MOVIE_SUCCESS',
    payload: movie,
});

export const updateMovieFailure = () => ({
    type: 'UPDATE_MOVIE_FAILURE',
});

export const deleteMovieRequest = () => ({
    type: 'DELETE_MOVIES_REQUEST'
});

export const deleteMovieSuccess = (id) => ({
    type: 'DELETE_MOVIES_SUCCESS',
    payload: id
});

export const deleteMovieFailure = () => ({
    type: 'DELETE_MOVIES_FAILURE'
});