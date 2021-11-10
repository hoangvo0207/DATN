const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                user: null,
                isLoading: true,
                error: false
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isLoading: false,
                error: false
            };
        case 'LOGIN_FAILURE':
            return {
                user: null,
                isLoading: false,
                error: true
            };
        case 'LOGOUT_REQUEST':
            return {
                user: null,
                isLoading: false,
                error: false
            };
        default:
            return {
                ...state
            }
    }
};

export default AuthReducer;