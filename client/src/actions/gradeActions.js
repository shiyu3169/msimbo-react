import { GET_GRADES_BY_USER } from "./types";
import axios from "axios";

export const getGradesByUser = uid => async dispatch => {
    const res = await axios.get(`/api/grade/${uid}`);
    dispatch({
        type: GET_GRADES_BY_USER,
        payload: res.data
    });
};
