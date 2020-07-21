import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import loginReducer from './screens/login/loginReducer';
import signupReducer from './screens/signup/signupReducer';

const reducers = combineReducers({
    logIn: loginReducer, 
    signUp: signupReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;