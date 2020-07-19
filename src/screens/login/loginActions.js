export const LOG_IN = 'LOG_IN';

export const logIn = (data) => {
    // does requisition in API
    return { type: LOG_IN, payload: data };
};