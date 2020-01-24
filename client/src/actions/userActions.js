import {
  GET_USERS,
  EDIT_USER,
  UPDATE_USER,
  GET_USER,
  FILTER_USERS,
  DELETE_USER,
  USER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  UPLOAD_PHOTO,
  UPLOAD_RESUME
} from './types';
import axios from 'axios';

import $ from 'jquery';

// Create User
export const createUser = formData => async dispatch => {
  try {
    const res = await axios.post('/api/users', formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.msg
    });
  }
};

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
  try {
    const res = await axios.put(`/api/users/${user._id}`, user);
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });
    // Close edit modal
    dispatch({
      type: EDIT_USER
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data
    });
  }
};

export const getUsers = () => async dispatch => {
  const res = await axios.get('/api/users');
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};
// Open edit modal
export const edit = () => dispatch => {
  dispatch({
    type: EDIT_USER
  });
};

export const filterUser = season => dispatch => {
  dispatch({
    type: FILTER_USERS,
    payload: season
  });
};

export const deleteUser = (id, history) => async dispatch => {
  // Close delete modal
  $('#deleteModal').modal('hide');
  try {
    await axios.delete(`/api/users/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id
    });
    // Close edit modal
    dispatch({
      type: EDIT_USER
    });
    // Redirect
    history.push('/students');
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data
    });
  }
};

export const uploadPhoto = (id, photo) => async dispatch => {
  try {
    if (photo) {
      const formData = new FormData();
      formData.append('file', photo);
      const res = await axios.post(`/api/images/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      dispatch({
        type: UPLOAD_PHOTO,
        payload: res.data
      });
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data
    });
  }
};

export const uploadResume = (id, resume) => async dispatch => {
  try {
    if (resume) {
      const formData = new FormData();
      formData.append('file', resume);
      const res = await axios.post(`/api/resumes/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      dispatch({
        type: UPLOAD_RESUME,
        payload: res.data
      });
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data
    });
  }
};
