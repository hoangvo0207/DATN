import axios from 'axios';
import { apiUrl } from '../../constants/constant';
import { createFeedbackFailure, createFeedbackRequest, createFeedbackSuccess, deleteFeedbackFailure, deleteFeedbackRequest, deleteFeedbackSuccess, getFeedbacksFailure, getFeedbacksRequest, getFeedbacksSuccess, updateFeedbackFailure, updateFeedbackRequest, updateFeedbackSuccess } from './FeedbackAction';

export const getFeedbacks = async (dispatch) => {
    dispatch(getFeedbacksRequest());
    try {
        const respone = await axios.get(`${apiUrl}/feedbacks`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(getFeedbacksSuccess(respone.data));
    } catch (error) {
        dispatch(getFeedbacksFailure());
    }
};

export const createFeedback = async (feedback, dispatch) => {
    dispatch(createFeedbackRequest());
    try {
        const respone = await axios.post(`${apiUrl}/feedbacks`, feedback, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(createFeedbackSuccess(respone.data));
    } catch (error) {
        dispatch(createFeedbackFailure());
    }
};

export const updateFeedback = async (updatedFeedback, dispatch) => {
    dispatch(updateFeedbackRequest());
    try {
        const response = await axios.put(`${apiUrl}/feedbacks/${updatedFeedback._id}`,
            updatedFeedback,
            {
                headers: {
                    token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
                },
            }
        );
        dispatch(updateFeedbackSuccess(response.data));
    } catch (error) {
        dispatch(updateFeedbackFailure());
    }
};

export const deleteFeedback = async (id, dispatch) => {
    dispatch(deleteFeedbackRequest());
    try {
        await axios.delete(`${apiUrl}/feedbacks/${id}`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(deleteFeedbackSuccess(id));
    } catch (error) {
        dispatch(deleteFeedbackFailure());
    }
};