import { combineReducers } from "redux";
import userReducer from "./userReducer";
import resourceReducer from "./resourceReducer";

export default combineReducers({
    user: userReducer,
    resource: resourceReducer
});
