import { GET_USERS } from "./types";
import axios from "axios";

export const getUsers = () => async dispatch => {
    const res = await axios.get("/api/user");
    dispatch({
        type: GET_USERS,
        payload: res.data
    });
};
