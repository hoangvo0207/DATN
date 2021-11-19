const MovieReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MOVIES_REQUEST':
            return {
                movies: [],
                isLoading: true,
                error: false
            };
        case 'GET_MOVIES_SUCCESS':
            return {
                movies: action.payload,
                isLoading: false,
                error: false
            };
        case 'GET_MOVIES_FAILURE':
            return {
                movies: [],
                isLoading: false,
                error: true
            };
        case 'CREATE_MOVIE_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'CREATE_MOVIE_SUCCESS':
            return {
                movies: [...state.movies, action.payload],
                isLoading: false,
                error: false
            };
        case 'CREATE_MOVIE_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case 'FIND_MOVIE':
            return {
                ...state,
                movie: action.payload
            }
        case 'UPDATE_MOVIE_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'UPDATE_MOVIE_SUCCESS': {
            const newmovie = state.movies.map((movie) =>
                movie._id === action.payload._id ? action.payload : movie
            );
            return {
                ...state,
                movies: newmovie,
                isLoading: false,
                error: false
            }
        };
        case 'UPDATE_MOVIE_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case 'DELETE_MOVIE_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'DELETE_MOVIE_SUCCESS':
            return {
                movies: state.movies.filter((movie) => movie._id !== action.payload),
                isLoading: false,
                error: false
            };
        case 'DELETE_MOVIE_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        default:
            return {
                ...state
            }
    }
};

export default MovieReducer;