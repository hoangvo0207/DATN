import AuthReducer from './AuthReducer';
import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isLoading: state.isLoading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
