import {
    GET_USERS,
    LOGIN,
    LOGGEDIN,
    REGISTER,
    LOGOUT,
    EDIT_USER,
    UPDATE_USER
} from "../actions/types";

const initialState = {
    users: [],
    user: 0,
    editing: false
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
        case EDIT_USER:
            return {
                ...state,
                editing: !state.editing
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
