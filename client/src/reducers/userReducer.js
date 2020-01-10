import {
  GET_USERS,
  LOGOUT,
  EDIT_USER,
  UPDATE_USER,
  GET_USER,
  FILTER_USERS,
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
  loading: true,
  seasons: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      const seasons = new Set();
      const users = action.payload;
      // users.sort(compare);
      for (let i = 0; i < users.length; i++) {
        const year = moment(users[i].dateCreated).year();
        const month = moment(users[i].dateCreated).month();
        if (month < 6) {
          seasons.add(`Spring ${year}`);
        } else {
          seasons.add(`Fall ${year}`);
        }
      }
      // function compare(a, b) {
      //   if (a.dateCreated > b.dateCreated) {
      //     return -1;
      //   } else {
      //     return 1;
      //   }
      // }
      return {
        ...state,
        seasons: Array.from(seasons),
        users: users,
        allUsers: users
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

    case FILTER_USERS:
      state.users = state.allUsers;
      return {
        ...state,
        users: state.users.filter(user => {
          const content = action.payload.split(" ");
          const month = content[0];
          const year = content[1];
          return (
            moment(user.dateCreated)
              .year()
              .toString() === year &&
            ((moment(user.dateCreated).month() < 6 && month === "Spring") ||
              (moment(user.dateCreated).month() >= 6 && month === "Fall"))
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
