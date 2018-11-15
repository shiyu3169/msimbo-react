import {
    GET_ASSIGNMENTS,
    CREATE_ASSIGNMENT,
    ADD_ASSIGNMENT
} from "../actions/types";

const initialState = {
    assignments: [],
    creating: false
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
        default:
            return state;
    }
}
