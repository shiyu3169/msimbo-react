import {
    GET_USERS,
    LOGIN,
    LOGGEDIN,
    REGISTER,
    LOGOUT,
    EDIT_USER,
    UPDATE_USER,
    GET_USER,
    FILTER_USERS
} from "../actions/types";

const initialState = {
    allUsers: [],
    users: [],
    currentUser: 0,
    editing: false,
    profile: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                allUsers: action.payload,
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
        case GET_USER:
            return {
                ...state,
                profile: action.payload
            };
        case FILTER_USERS:
            if (action.payload.text !== "") {
                switch (action.payload.type) {
                    case "name":
                        return {
                            ...state,
                            users: state.users.filter(
                                user =>
                                    user.firstName
                                        .toUpperCase()
                                        .includes(action.payload.text) ||
                                    user.lastName
                                        .toUpperCase()
                                        .includes(action.payload.text)
                            )
                        };
                    case "time":
                        if (action.payload.season === "Spring") {
                            return {
                                ...state,
                                users: state.usrs.filter(
                                    user =>
                                        new Date(user.dateCreated)
                                            .getFullYear()
                                            .toString.includes(
                                                action.payload.text
                                            ) ||
                                        new Date(user.dateCreated).getMonth() <=
                                            6
                                )
                            };
                        } else {
                            return {
                                ...state,
                                users: state.usrs.filter(
                                    user =>
                                        new Date(user.dateCreated)
                                            .getFullYear()
                                            .toString.includes(
                                                action.payload.text
                                            ) ||
                                        new Date(user.dateCreated).getMonth() >
                                            6
                                )
                            };
                        }

                    default:
                        return state;
                }
            } else {
                return { ...state, users: state.allUsers };
            }
        default:
            return state;
    }
}
