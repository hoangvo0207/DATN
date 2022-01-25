export const getFeedbacksRequest = () => ({
    type: 'GET_FEEDBACKS_REQUEST'
});

export const getFeedbacksSuccess = (feedbacks) => ({
    type: 'GET_FEEDBACKS_SUCCESS',
    payload: feedbacks
});

export const getFeedbacksFailure = () => ({
    type: 'GET_FEEDBACKS_FAILURE'
});

export const createFeedbackRequest = () => ({
    type: 'CREATE_FEEDBACK_REQUEST'
});

export const createFeedbackSuccess = (feedback) => ({
    type: 'CREATE_FEEDBACK_SUCCESS',
    payload: feedback
});

export const createFeedbackFailure = () => ({
    type: 'CREATE_FEEDBACK_FAILURE'
});

export const updateFeedbackRequest = () => ({
    type: 'UPDATE_FEEDBACK_START',
});

export const updateFeedbackSuccess = (feedback) => ({
    type: 'UPDATE_FEEDBACK_SUCCESS',
    payload: feedback,
});

export const updateFeedbackFailure = () => ({
    type: 'UPDATE_FEEDBACK_FAILURE',
});

export const deleteFeedbackRequest = () => ({
    type: 'DELETE_FEEDBACK_REQUEST'
});

export const deleteFeedbackSuccess = (id) => ({
    type: 'DELETE_FEEDBACK_SUCCESS',
    payload: id
});

export const deleteFeedbackFailure = () => ({
    type: 'DELETE_FEEDBACK_FAILURE'
});