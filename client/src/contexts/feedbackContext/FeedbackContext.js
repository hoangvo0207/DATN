import { createContext, useReducer } from 'react';
import FeedbackReducer from './FeedbackReducer';

const INITIAL_STATE = {
    feedbacks: [],
    feedback: null,
    isLoading: false,
    error: false
};

export const FeedbackContext = createContext(INITIAL_STATE);

export const FeedbackContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(FeedbackReducer, INITIAL_STATE);

    const findFeedback = feedbackId => {
        const feedback = state.feedbacks.find(feedback => feedback._id === feedbackId);
        dispatch({
            type: 'FIND_FEEDBACK',
            payload: feedback
        })
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks: state.feedbacks,
                feedback: state.feedback,
                isLoading: state.isLoading,
                error: state.error,
                findFeedback,
                dispatch
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}
