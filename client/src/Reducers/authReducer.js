import { LOGIN_SUCCESS,LOGIN_FAIL, LOGOUT } from '../Actions/action-types';

const initialState = {
    isLoggedIn: false,
    token: localStorage.getItem('token'),
    userId: null,
    email: null
};

export default  (state=initialState,action) => {
    const { type, payload } = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                userId: payload.userId,
                email: payload.email
            };
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                userId: null,
                email: null
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                userId: null,
                email: null
            };
        default:
            return state
    }
}