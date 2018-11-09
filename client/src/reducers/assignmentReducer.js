import { GET_ASSIGNMENTS } from "../actions/types";

const initialState = {
    assignments: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ASSIGNMENTS:
            return {
                ...state,
                assignments: action.payload
            };
        default:
            return state;
    }
}
