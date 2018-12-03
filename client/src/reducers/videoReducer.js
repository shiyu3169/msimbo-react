import {
    GET_VIDEOS,
    CREATE_VIDEO,
    ADD_VIDEO,
    EDIT_VIDEO,
    UPDATE_VIDEO,
    DELETE_VIDEO
} from "../actions/types";

const initialState = {
    videos: [],
    creating: false,
    editing: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOS:
            return {
                ...state,
                videos: action.payload
            };
        case CREATE_VIDEO:
            return {
                ...state,
                creating: !state.creating
            };
        case ADD_VIDEO:
            return {
                ...state,
                videos: [action.payload, ...state.videos]
            };
        case EDIT_VIDEO:
            return {
                ...state,
                editing: action.payload
            };
        case UPDATE_VIDEO:
            return {
                ...state,
                videos: state.videos.map(video =>
                    video._id === action.payload._id
                        ? (video = action.payload)
                        : video
                )
            };
        case DELETE_VIDEO:
            return {
                ...state,
                videos: state.videos.filter(
                    video => video._id !== action.payload
                )
            };
        default:
            return state;
    }
}
