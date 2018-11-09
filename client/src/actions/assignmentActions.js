import { GET_ASSIGNMENTS, CREATE_ASSIGNMENT } from "./types";
import axios from "axios";

export const getAssignments = () => async dispatch => {
    const res = await axios.get("/api/assignment");
    dispatch({
        type: GET_ASSIGNMENTS,
        payload: res.data
    });
};

export const createAssignment = () => async dispatch => {
    dispatch({
        type: CREATE_ASSIGNMENT
    });
};
