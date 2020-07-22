import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import AccountReducer from './reducers/AccountReducer';
import linkReducer from './reducers/LinkReducer';

const reducers = combineReducers({
    account: AccountReducer,
    link: linkReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;