import { GET_GRADES_BY_USER, ADD_GRADE, DELETE_GRADE } from "../actions/types";

const initialState = {
    grades: [],
    creating: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_GRADES_BY_USER:
            return {
                ...state,
                grades: action.payload
            };
        case ADD_GRADE:
            return {
                ...state,
                grades: [action.payload, ...state.grades]
            };
        case DELETE_GRADE:
            return {
                ...state,
                grades: state.grades.filter(grade => {
                    return grade._id !== action.payload;
                })
            };
        default:
            return state;
    }
}
