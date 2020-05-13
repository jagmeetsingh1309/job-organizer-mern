import axios from 'axios';

import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from './action-types';
import { setAlert } from './alertActions';

export const loginUser = (data,history) => {
    return async function (dispatch,getState){
        try{
            const body = JSON.stringify(data);
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await axios.post('http://localhost:8000/login',body,config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
            history.push('/dashboard');
        } catch(error){
            dispatch(setAlert(error.response.data.message,'danger'));
            dispatch({
                type: LOGIN_FAIL
            });
            history.push('/login');
        }
    }
};

export const logoutUser = () => {
    return {
        type: LOGOUT
    };
}

export const signupUser = (data,history) => {
    return async function (dispatch,getState){
        try{
            const body = JSON.stringify(data);
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.post('http://localhost:8000/register',body,config);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            });
            history.push('/login');
        } catch(error){
            dispatch(setAlert(error.response.data.message,'danger'));
            dispatch({
                type: SIGNUP_FAIL
            });
            history.push('/signup');
        }
    }   
}
