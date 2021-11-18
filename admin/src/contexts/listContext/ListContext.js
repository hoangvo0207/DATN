import { createContext, useReducer } from 'react';
import ListReducer from './ListReducer';

const INITIAL_STATE = {
    lists: [],
    list: null,
    isLoading: false,
    error: false
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

    const findList = listId => {
        const list = state.lists.find(list => list._id === listId);
        dispatch({
            type: 'FIND_LIST',
            payload: list
        })
    }

    return (
        <ListContext.Provider
            value={{
                list: state.list,
                lists: state.lists,
                isLoading: state.isLoading,
                error: state.error,
                findList,
                dispatch
            }}
        >
            {children}
        </ListContext.Provider>
    )
}
