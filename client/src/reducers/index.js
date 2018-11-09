import { combineReducers } from "redux";
import userReducer from "./userReducer";
import resourceReducer from "./resourceReducer";
import assignmentReducer from "./assignmentReducer";

export default combineReducers({
    user: userReducer,
    resource: resourceReducer,
    assignment: assignmentReducer
});
