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
    currentUser: 0,
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
                currentUser: action.payload
            };
        case LOGGEDIN:
            return {
                ...state,
                currentUser: action.payload
            };
        case REGISTER:
            return {
                ...state
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: 0
            };
        case EDIT_USER:
            return {
                ...state,
                editing: !state.editing
            };
        case UPDATE_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}
