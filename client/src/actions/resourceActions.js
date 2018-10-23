import { Get_RESOURCES } from "./types";
import axios from "axios";

export const getResources = () => async dispatch => {
    const res = await axios.get("/api/wiki");
    dispatch({
        type: Get_RESOURCES,
        payload: res.data
    });
};
