import { apiPost } from '../helpers/api';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const signUp = (data) => {
    
    const payload = apiPost('/auth/sign-up', data);
    // does requisition in API
    return { type: SIGN_UP, payload };
};

export const logIn = (data) => {
    const payload = apiPost('/auth/log-in', data);
    // does requisition in API
    return { type: LOG_IN, payload };
};

export const logOut = () => {
    return { type: LOG_OUT, payload: {} };
};