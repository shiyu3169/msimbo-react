import { GET_ASSIGNMENTS, CREATE_ASSIGNMENT } from "../actions/types";

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
        default:
            return state;
    }
}
