import { combineReducers } from "redux";
import userReducer from "./userReducer";
import resourceReducer from "./resourceReducer";
import assignmentReducer from "./assignmentReducer";
import gradeReducer from "./gradeReducer";
import videoReducer from "./videoReducer";
import authReducer from "./authReducer";

export default combineReducers({
  user: userReducer,
  resource: resourceReducer,
  assignment: assignmentReducer,
  grade: gradeReducer,
  video: videoReducer,
  auth: authReducer
});
