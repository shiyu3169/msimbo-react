import {
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ASSIGNMENT_ERROR,
  CLEAR_AUTH_ERROR,
  CLEAR_USER_ERROR
} from "./types";
import uuid from "uuid";

export const setAlert = (msg, type, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id }
  });

  // Remove alert and clear all errors after timeout
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
    dispatch({ type: CLEAR_ASSIGNMENT_ERROR });
    dispatch({ type: CLEAR_AUTH_ERROR });
    dispatch({ type: CLEAR_USER_ERROR });
  }, timeout);
};
