import { createContext, useReducer } from 'react';
import ListReducer from './ListReducer';

const INITIAL_STATE = {
    lists: [],
    isLoading: false,
    error: false
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

    return (
        <ListContext.Provider
            value={{
                lists: state.lists,
                isLoading: state.isLoading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </ListContext.Provider>
    )
}
