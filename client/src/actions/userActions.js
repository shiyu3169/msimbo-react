import { GET_USERS, LOGIN, LOGGEDIN, REGISTER, LOGOUT } from "./types";
import axios from "axios";

export const getUsers = () => async dispatch => {
    const res = await axios.get("/api/user");
    dispatch({
        type: GET_USERS,
        payload: res.data
    });
};

export const login = user => async dispatch => {
    const res = await axios.post("/api/login", user);
    dispatch({
        type: LOGIN,
        payload: res.data
    });
};

export const register = user => async dispatch => {
    await axios.post("/api/user", user);
    dispatch({
        type: REGISTER
    });
};

export const loggedIn = () => async dispatch => {
    const res = await axios.post("/api/loggedIn");
    dispatch({
        type: LOGGEDIN,
        payload: res.data
    });
};

export const logout = () => async dispatch => {
    await axios.post("/api/logout");
    dispatch({
        type: LOGOUT
    });
};
