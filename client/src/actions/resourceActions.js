import {
    GET_RESOURCES,
    CREATE_RESOURCE,
    ADD_RESOURCE,
    EDIT_RESOURCE,
    DELETE_RESOURCE,
    UPDATE_RESOURCE
} from "./types";
import axios from "axios";

export const getResources = () => async dispatch => {
    const res = await axios.get("/api/resource");
    dispatch({
        type: GET_RESOURCES,
        payload: res.data
    });
};

export const createResource = () => async dispatch => {
    dispatch({
        type: CREATE_RESOURCE
    });
};

export const addResource = resource => async dispatch => {
    const res = await axios.post("/api/resource", resource);
    dispatch({
        type: ADD_RESOURCE,
        payload: res.data
    });
};

export const editResource = id => async dispatch => {
    dispatch({
        type: EDIT_RESOURCE,
        payload: id
    });
};

export const deleteResource = id => async dispatch => {
    await axios.delete(`/api/resource/${id}`);
    dispatch({
        type: DELETE_RESOURCE,
        payload: id
    });
};

export const updateResource = resource => async dispatch => {
    await axios.put(`/api/resource/${resource._id}`, resource);
    dispatch({
        type: UPDATE_RESOURCE,
        payload: resource
    });
};
