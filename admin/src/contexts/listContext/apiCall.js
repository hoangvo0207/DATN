import axios from 'axios';
import { apiUrl } from '../../constants/constant';
import { createListFailure, createListRequest, createListSuccess, deleteListFailure, deleteListRequest, deleteListSuccess, getListsFailure, getListsRequest, getListsSuccess, updateListFailure, updateListRequest, updateListSuccess } from './ListAction';

export const getLists = async (dispatch) => {
    dispatch(getListsRequest());
    try {
        const respone = await axios.get(`${apiUrl}/lists`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(getListsSuccess(respone.data));
    } catch (error) {
        dispatch(getListsFailure());
    }
};

export const createList = async (list, dispatch) => {
    dispatch(createListRequest());
    try {
        const respone = await axios.post(`${apiUrl}/lists`, list, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(createListSuccess(respone.data));
    } catch (error) {
        dispatch(createListFailure());
    }
};

export const updateList = async (updatedList, dispatch) => {
    dispatch(updateListRequest());
    try {
        const response = await axios.put(`${apiUrl}/lists/${updatedList._id}`,
            updatedList,
            {
                headers: {
                    token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
                },
            }
        );
        dispatch(updateListSuccess(response.data));
    } catch (error) {
        dispatch(updateListFailure());
    }
};

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListRequest());
    try {
        await axios.delete(`${apiUrl}/lists/${id}`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFailure());
    }
};