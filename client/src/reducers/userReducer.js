import { GET_USERS, LOGIN, LOGGEDIN } from "../actions/types";

const initialState = {
    users: [],
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case LOGGEDIN:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
