import { GET_GRADES_BY_USER } from "../actions/types";

const initialState = {
    grades: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_GRADES_BY_USER:
            return {
                ...state,
                grades: action.payload
            };
        default:
            return state;
    }
}
