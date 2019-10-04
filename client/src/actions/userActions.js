import {
  GET_USERS,
  LOGOUT,
  EDIT_USER,
  UPDATE_USER,
  GET_USER,
  FILTER_USERS,
  CHANGE_FILTER,
  DELETE_USER,
  USER_ERROR
} from "./types";
import axios from "axios";

// Get user by id
export const getUser = id => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data
    });
  }
};

export const update = user => async dispatch => {
  const res = await axios.put(`/api/users/${user._id}`, user);
  dispatch({
    type: UPDATE_USER,
    payload: res.data
  });
};

export const getUsers = () => async dispatch => {
  const res = await axios.get("/api/users");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const logout = () => async dispatch => {
  await axios.post("/api/logout");
  dispatch({
    type: LOGOUT
  });
};

export const edit = () => dispatch => {
  dispatch({
    type: EDIT_USER
  });
};

export const filterUser = () => dispatch => {
  dispatch({
    type: FILTER_USERS
  });
};

export const changeFilter = filter => dispatch => {
  dispatch({
    type: CHANGE_FILTER,
    payload: filter
  });
};

export const deleteUser = id => async dispatch => {
  axios.delete(`/api/user/${id}`);
  dispatch({
    type: DELETE_USER,
    payload: id
  });
};
