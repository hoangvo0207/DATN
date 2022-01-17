import axios from 'axios';
import { apiUrl } from '../../constants/constant';
import { deleteRecommendFailure, deleteRecommendRequest, deleteRecommendSuccess, getRecommendsFailure, getRecommendsRequest, getRecommendsSuccess } from './RecommendAction';

export const getRecommends = async (dispatch) => {
    dispatch(getRecommendsRequest());
    try {
        const respone = await axios.get(`${apiUrl}/recommends`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(getRecommendsSuccess(respone.data));
    } catch (error) {
        dispatch(getRecommendsFailure());
    }
};

export const deleteRecommend = async (id, dispatch) => {
    dispatch(deleteRecommendRequest());
    try {
        await axios.delete(`${apiUrl}/recommends/${id}`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(deleteRecommendSuccess(id));
    } catch (error) {
        dispatch(deleteRecommendFailure());
    }
};