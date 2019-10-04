import {
  GET_ASSIGNMENTS,
  CREATE_ASSIGNMENT,
  ADD_ASSIGNMENT,
  EDIT_ASSIGNMENT,
  DELETE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
  ASSIGNMENT_ERROR,
  CLEAR_ASSIGNMENT_ERROR,
  CANCEL_CREATE_ASSIGNMENT
} from "../actions/types";

const initialState = {
  assignments: [],
  creating: false,
  editing: "",
  loading: true,
  error: null,
  created: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENTS:
      return {
        ...state,
        assignments: action.payload,
        loading: false
      };
    case CREATE_ASSIGNMENT:
      return {
        ...state,
        creating: true
      };
    case CANCEL_CREATE_ASSIGNMENT:
      return {
        ...state,
        creating: false
      };
    case ADD_ASSIGNMENT:
      return {
        ...state,
        creating: false,
        created: true,
        assignments: [action.payload, ...state.assignments]
      };
    case EDIT_ASSIGNMENT:
      return {
        ...state,
        editing: action.payload
      };
    case DELETE_ASSIGNMENT:
      return {
        ...state,
        assignments: state.assignments.filter(
          assignment => assignment._id !== action.payload
        )
      };
    case UPDATE_ASSIGNMENT:
      return {
        ...state,
        assignments: state.assignments.map(assignment =>
          assignment._id === action.payload._id
            ? (assignment = action.payload)
            : assignment
        )
      };
    case ASSIGNMENT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ASSIGNMENT_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
