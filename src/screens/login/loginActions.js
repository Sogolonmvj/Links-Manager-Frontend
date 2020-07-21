import { apiPost } from '../../helpers/api';

export const LOG_IN = 'LOG_IN';

export const logIn = (data) => {
    const payload = apiPost('/auth/log-in', data);
    // does requisition in API
    return { type: LOG_IN, payload };
};