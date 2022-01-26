import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const INITIAL_STATE = {
    users: [],
    user: null,
    isLoading: false,
    error: false
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    const findUser = userId => {
        const user = state.users.find(user => user._id === userId);
        dispatch({
            type: 'FIND_USER',
            payload: user
        })
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                users: state.users,
                isLoading: state.isLoading,
                error: state.error,
                findUser,
                dispatch
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
