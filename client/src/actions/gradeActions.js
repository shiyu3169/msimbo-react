import {
  GET_GRADES_BY_USER,
  ADD_GRADE,
  DELETE_GRADE,
  UPDATE_GRADE
} from "./types";
import axios from "axios";
import $ from "jquery";

export const getGradesByUser = uid => async dispatch => {
  try {
    const res = await axios.get(`/api/grades/${uid}`);
    dispatch({
      type: GET_GRADES_BY_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addGrade = grade => async dispatch => {
  try {
    const res = await axios.post("/api/grades", grade);
    dispatch({
      type: ADD_GRADE,
      payload: res.data
    });
    $("#newGrade").modal("hide");
  } catch (error) {
    console.log(error);
  }
};

export const deleteGrade = id => async dispatch => {
  await axios.delete(`/api/grade/${id}`);
  dispatch({
    type: DELETE_GRADE,
    payload: id
  });
};

export const updateGrade = grade => async dispatch => {
  await axios.put(`/api/grade/${grade._id}`, grade);
  dispatch({
    type: UPDATE_GRADE,
    payload: grade
  });
};
