import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './action-types';

export const setAlert = (msg,msgType) => {
    return async function (dispatch, getState) {
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: {
                id: id,
                msg: msg,
                type: msgType
            }
        });
        setTimeout( () => dispatch({
            type: REMOVE_ALERT,
            payload: id
        }), 5000);
    }
}