import {
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import $ from "jquery";

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

// Login user
export const login = formData => async dispatch => {
  try {
    const res = await axios.post("/api/auth", formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    $("#loginModal").modal("hide");
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    console.log(error.response);
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.msg
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
