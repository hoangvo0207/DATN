import { createContext, useReducer } from 'react';
import RecommendReducer from './RecommendReducer';

const INITIAL_STATE = {
    recommends: [],
    recommend: null,
    isLoading: false,
    error: false
};

export const RecommendContext = createContext(INITIAL_STATE);

export const RecommendContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(RecommendReducer, INITIAL_STATE);

    const findRecommend = recommendId => {
        const recommend = state.recommends.find(recommend => recommend._id === recommendId);
        dispatch({
            type: 'FIND_RECOMMEND',
            payload: recommend
        })
    };

    return (
        <RecommendContext.Provider
            value={{
                recommend: state.recommend,
                recommends: state.recommends,
                isLoading: state.isLoading,
                error: state.error,
                findRecommend,
                dispatch
            }}
        >
            {children}
        </RecommendContext.Provider>
    )
}
