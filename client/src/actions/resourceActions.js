import { GET_RESOURCES } from "./types";
import axios from "axios";

export const getResources = () => async dispatch => {
    const res = await axios.get("/api/wiki");
    dispatch({
        type: GET_RESOURCES,
        payload: res.data
    });
};
