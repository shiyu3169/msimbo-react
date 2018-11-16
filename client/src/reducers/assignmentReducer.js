import {
    GET_ASSIGNMENTS,
    CREATE_ASSIGNMENT,
    ADD_ASSIGNMENT,
    EDIT_ASSIGNMENT
} from "../actions/types";

const initialState = {
    assignments: [],
    creating: false,
    editing: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ASSIGNMENTS:
            return {
                ...state,
                assignments: action.payload
            };
        case CREATE_ASSIGNMENT:
            return {
                ...state,
                creating: !state.creating
            };
        case ADD_ASSIGNMENT:
            return {
                ...state,
                assignments: [action.payload, ...state.assignments]
            };
        case EDIT_ASSIGNMENT:
            return {
                ...state,
                editing: action.payload
            };
        default:
            return state;
    }
}
