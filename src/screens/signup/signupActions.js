import { apiPost } from '../../helpers/api';

export const SIGN_UP = 'SIGN_UP';

export const signUp = (data) => {
    
    const payload = apiPost('/auth/sign-up', data);
    // does requisition in API
    return { type: SIGN_UP, payload };
};