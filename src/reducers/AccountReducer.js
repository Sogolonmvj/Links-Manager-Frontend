import { setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken, getAccount } from '../helpers/account';
import { SIGN_UP, LOG_IN, LOG_OUT, INIT_ACCOUNT, REFRESH_TOKEN } from '../actions/AccountActions';

const initialState = {
    account: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SIGN_UP:
        case LOG_IN:
            const response = payload ? payload.data : null;
            const account = response ? response.data : null;
            const metadata = response ? response.metadata : null;

            const token = metadata ? metadata.token : null;
            const refreshToken = metadata ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return { ...state, account };

        case LOG_OUT: 
            removeAccount();
            removeToken();
            removeRefreshToken();
            return { ...state, account: null };
        
        case INIT_ACCOUNT: {
            const account = getAccount();
            return {...state, account};
        }

        case REFRESH_TOKEN: {
            const response = payload ? payload.data : null;
            const metadata = response ? response.metadata : null;
            const token = metadata ? metadata.token : null;
            if (token) setToken(token);
            return state;

        }

        default:
            return state;
    };
};