import {
  GET_USERS,
  LOGOUT,
  EDIT_USER,
  UPDATE_USER,
  GET_USER,
  FILTER_USERS,
  CHANGE_FILTER,
  DELETE_USER,
  USER_ERROR,
  UPLOAD_PHOTO
} from "../actions/types";
import moment from "moment";

const initialState = {
  users: [],
  currentUser: 0,
  editing: false,
  profile: 0,
  allUsers: [],
  filter: { name: "", season: "", year: "" },
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload
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
        profile: action.payload
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => {
          return user._id !== action.payload;
        })
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case FILTER_USERS:
      state.users = state.allUsers;
      return {
        ...state,
        users: state.users.filter(user => {
          return (
            (user.firstName + user.lastName)
              .toUpperCase()
              .includes(state.filter.name) &&
            (moment(user.dateCreated)
              .year()
              .toString() === state.filter.year ||
              state.filter.year === "") &&
            ((moment(user.dateCreated).month() < 6 &&
              state.filter.season === "Spring") ||
              (moment(user.dateCreated).month() >= 6 &&
                state.filter.season === "Fall") ||
              state.filter.season === "")
          );
        })
      };
    case UPLOAD_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, image: action.payload }
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
