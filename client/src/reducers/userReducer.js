import { GET_USERS, LOGIN, LOGGEDIN, REGISTER, LOGOUT } from "../actions/types";

const initialState = {
    users: [],
    user: 0
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
        case REGISTER:
            return {
                ...state
            };
        case LOGOUT:
            return {
                ...state,
                user: 0
            };
        default:
            return state;
    }
}
