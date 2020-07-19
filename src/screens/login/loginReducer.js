import { LOG_IN } from './loginActions';

const initialState = {
    account: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOG_IN:
            return { ...initialState, account: { ...payload, success: true } };
        default:
            return state;
    }
}