import {
  GET_GRADES_BY_USER,
  ADD_GRADE,
  DELETE_GRADE,
  UPDATE_GRADE
} from "./types";
import axios from "axios";

export const getGradesByUser = uid => async dispatch => {
  const res = await axios.get(`/api/grade/${uid}`);
  dispatch({
    type: GET_GRADES_BY_USER,
    payload: res.data
  });
};

export const addGrade = grade => async dispatch => {
  const res = await axios.post("/api/grade", grade);
  dispatch({
    type: ADD_GRADE,
    payload: res.data
  });
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

export const getGradeBySeason = (season, year) => async dispatch => {
  const res = await axios.get(`/api/grade?season=${season}&year=${year}`);
  // console.log(res.data);
};
