import axios from 'axios';
import { apiUrl } from '../constants/constant';
import { loginFailure, loginRequest, loginSuccess } from './AuthAction';

export const login = async (user, dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${apiUrl}/auth/login`, user);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};