import {
    GET_ASSIGNMENTS,
    CREATE_ASSIGNMENT,
    ADD_ASSIGNMENT,
    EDIT_ASSIGNMENT,
    DELETE_ASSIGNMENT,
    UPDATE_ASSIGNMENT
} from "./types";
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

export const addAssignment = assignment => async dispatch => {
    const res = await axios.post("/api/assignment", assignment);
    dispatch({
        type: ADD_ASSIGNMENT,
        payload: res.data
    });
};

export const editAssignment = id => async dispatch => {
    dispatch({
        type: EDIT_ASSIGNMENT,
        payload: id
    });
};

export const deleteAssignment = id => async dispatch => {
    await axios.delete(`/api/assignment/${id}`);
    dispatch({
        type: DELETE_ASSIGNMENT,
        payload: id
    });
};

export const updateAssignment = assignment => async dispatch => {
    await axios.put(`/api/assignment/${assignment._id}`, assignment);
    dispatch({
        type: UPDATE_ASSIGNMENT,
        payload: assignment
    });
};
