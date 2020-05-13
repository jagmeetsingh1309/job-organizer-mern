import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import jobReducer from './jobReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    auth: authReducer,
    jobs: jobReducer,
    form: formReducer,
    alert: alertReducer
});