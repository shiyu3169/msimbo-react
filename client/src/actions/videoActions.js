import axios from "axios";
import {
  GET_VIDEOS,
  CREATE_VIDEO,
  ADD_VIDEO,
  // EDIT_VIDEO,
  // UPDATE_VIDEO,
  DELETE_VIDEO
} from "./types";

export const getVideos = () => async dispatch => {
  const res = await axios.get("/api/videos");
  dispatch({
    type: GET_VIDEOS,
    payload: res.data
  });
};

export const createVideo = () => async dispatch => {
  dispatch({
    type: CREATE_VIDEO
  });
};

export const addVideo = video => async dispatch => {
  const res = await axios.post("/api/videos", video);
  dispatch({
    type: ADD_VIDEO,
    payload: res.data
  });
  dispatch({
    type: CREATE_VIDEO
  });
};

// export const editVideo = id => async dispatch => {
//     dispatch({
//         type: EDIT_VIDEO,
//         payload: id
//     });
// };

// export const updateVideo = video => async dispatch => {
//     await axios.put(`/api/youtube/${video._id}`, video);
//     dispatch({
//         type: UPDATE_VIDEO,
//         payload: video
//     });
// };

export const deleteVideo = id => async dispatch => {
  await axios.delete(`/api/videos/${id}`);
  dispatch({
    type: DELETE_VIDEO,
    payload: id
  });
};
