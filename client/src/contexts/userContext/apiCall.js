import axios from 'axios';
import { apiUrl } from '../../constants/constant';
import { deleteUserFailure, deleteUserRequest, deleteUserSuccess, getUsersFailure, getUsersRequest, getUsersSuccess, updateUserFailure, updateUserRequest, updateUserSuccess } from './UserAction';

export const getUsers = async (dispatch) => {
    dispatch(getUsersRequest());
    try {
        const respone = await axios.get(`${apiUrl}/users`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(getUsersSuccess(respone.data));
    } catch (error) {
        dispatch(getUsersFailure());
    }
};

export const updateUser = async (updatedUser, dispatch) => {
    dispatch(updateUserRequest());
    try {
        const response = await axios.put(`${apiUrl}/users/${updatedUser._id}`,
            updatedUser,
            {
                headers: {
                    token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
                },
            }
        );
        dispatch(updateUserSuccess(response.data));
    } catch (error) {
        dispatch(updateUserFailure());
    }
};

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserRequest());
    try {
        await axios.delete(`${apiUrl}/users/${id}`, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        });
        dispatch(deleteUserSuccess(id));
    } catch (error) {
        dispatch(deleteUserFailure());
    }
};