import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import loginReducer from './screens/login/loginReducer';

const reducers = combineReducers({
    logIn: loginReducer, 
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;