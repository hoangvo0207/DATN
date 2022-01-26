const UserReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS_REQUEST':
            return {
                users: [],
                isLoading: true,
                error: false
            };
        case 'GET_USERS_SUCCESS':
            return {
                users: action.payload,
                isLoading: false,
                error: false
            };
        case 'GET_USERS_FAILURE':
            return {
                users: [],
                isLoading: false,
                error: true
            };
        case 'FIND_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'UPDATE_USER_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'UPDATE_USER_SUCCESS': {
            const newUser = state.users.map((user) =>
                user._id === action.payload._id ? action.payload : user
            );
            return {
                ...state,
                users: newUser,
                isLoading: false,
                error: false
            }
        }

        case 'UPDATE_USER_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case 'DELETE_USER_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'DELETE_USER_SUCCESS':
            return {
                users: state.users.filter((user) => user._id !== action.payload),
                isLoading: false,
                error: false
            };
        case 'DELETE_USER_FAILURE':
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

export default UserReducer;