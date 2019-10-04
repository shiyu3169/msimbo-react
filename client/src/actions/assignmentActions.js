import {
  GET_ASSIGNMENTS,
  CREATE_ASSIGNMENT,
  ADD_ASSIGNMENT,
  EDIT_ASSIGNMENT,
  DELETE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
  ASSIGNMENT_ERROR,
  CANCEL_CREATE_ASSIGNMENT
} from "./types";
import axios from "axios";

export const getAssignments = () => async dispatch => {
  try {
    const res = await axios.get("/api/assignments");
    dispatch({
      type: GET_ASSIGNMENTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: error.response.msg
    });
  }
};

export const createAssignment = () => dispatch => {
  dispatch({
    type: CREATE_ASSIGNMENT
  });
};

export const cancelCreateAssignment = () => dispatch => {
  dispatch({
    type: CANCEL_CREATE_ASSIGNMENT
  });
};

export const addAssignment = assignment => async dispatch => {
  try {
    const res = await axios.post("/api/assignments", assignment);
    dispatch({
      type: ADD_ASSIGNMENT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: error.response.data.msg
    });
  }
};

export const editAssignment = id => dispatch => {
  dispatch({
    type: EDIT_ASSIGNMENT,
    payload: id
  });
};

export const deleteAssignment = id => async dispatch => {
  try {
    await axios.delete(`/api/assignments/${id}`);
    dispatch({
      type: DELETE_ASSIGNMENT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: error.response.data.msg
    });
  }
};

export const updateAssignment = assignment => async dispatch => {
  try {
    await axios.put(`/api/assignments/${assignment._id}`, assignment);
    dispatch({
      type: UPDATE_ASSIGNMENT,
      payload: assignment
    });
    // Close editing modal
    dispatch({
      type: EDIT_ASSIGNMENT,
      payload: ""
    });
  } catch (error) {
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: error.response.data.msg
    });
  }
};
