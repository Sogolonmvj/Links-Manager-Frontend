import { apiPost, apiRefreshToken } from '../helpers/api';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const INIT_ACCOUNT = 'INIT_ACCOUNT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const signUp = (data) => {
    
    const payload = apiPost('/auth/sign-up', data);
    return { type: SIGN_UP, payload };
};

export const logIn = (data) => {
    const payload = apiPost('/auth/log-in', data);
    return { type: LOG_IN, payload };
};

export const logOut = () => {
    return { type: LOG_OUT, payload: {} };
};

export const initAccount =() => {
    return { type: INIT_ACCOUNT, payload: {} };
};

export const getFreshToken = () => { 
    const payload = apiRefreshToken();
    return { type: REFRESH_TOKEN, payload };
};