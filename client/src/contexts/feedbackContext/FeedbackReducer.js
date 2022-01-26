const FeedbackReducer = (state, action) => {
    switch (action.type) {
        case 'GET_FEEDBACKS_REQUEST':
            return {
                feedbacks: [],
                isLoading: true,
                error: false
            };
        case 'GET_FEEDBACKS_SUCCESS':
            return {
                feedbacks: action.payload,
                isLoading: false,
                error: false
            };
        case 'GET_FEEDBACKS_FAILURE':
            return {
                feedbacks: [],
                isLoading: false,
                error: true
            };
        case 'CREATE_FEEDBACK_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'CREATE_FEEDBACK_SUCCESS':
            return {
                feedbacks: [...state.feedbacks, action.payload],
                isLoading: false,
                error: false
            };
        case 'CREATE_FEEDBACK_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case 'FIND_FEEDBACK':
            return {
                ...state,
                feedback: action.payload
            }
        case 'UPDATE_FEEDBACK_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'UPDATE_FEEDBACK_SUCCESS': {
            const newFeedback = state.feedbacks.map((feedback) =>
                feedback._id === action.payload._id ? action.payload : feedback
            );
            return {
                ...state,
                feedbacks: newFeedback,
                isLoading: false,
                error: false
            }
        };
        case 'UPDATE_FEEDBACK_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case 'DELETE_FEEDBACK_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'DELETE_FEEDBACK_SUCCESS':
            return {
                feedbacks: state.feedbacks.filter((feedback) => feedback._id !== action.payload),
                isLoading: false,
                error: false
            };
        case 'DELETE_FEEDBACK_FAILURE':
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

export default FeedbackReducer;