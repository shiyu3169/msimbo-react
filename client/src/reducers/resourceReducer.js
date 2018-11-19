import {
    GET_RESOURCES,
    CREATE_RESOURCE,
    ADD_RESOURCE,
    EDIT_RESOURCE,
    DELETE_RESOURCE,
    UPDATE_RESOURCE,
    FILTER_RESOURCE
} from "../actions/types";

const initialState = {
    resources: [],
    allResources: [],
    creating: false,
    editing: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_RESOURCES:
            return {
                ...state,
                resources: action.payload,
                allResources: action.payload
            };
        case CREATE_RESOURCE:
            return {
                ...state,
                creating: !state.creating
            };
        case ADD_RESOURCE:
            return {
                ...state,
                resources: [action.payload, ...state.resources]
            };
        case EDIT_RESOURCE:
            return {
                ...state,
                editing: action.payload
            };
        case DELETE_RESOURCE:
            return {
                ...state,
                resources: state.resources.filter(
                    resource => resource._id !== action.payload
                )
            };
        case UPDATE_RESOURCE:
            return {
                ...state,
                resources: state.resources.map(resource =>
                    resource._id === action.payload._id
                        ? (resource = action.payload)
                        : resource
                )
            };
        case FILTER_RESOURCE:
            return {
                ...state,
                resources: state.allResources.filter(resource => {
                    return resource.name
                        .toUpperCase()
                        .includes(action.payload.toUpperCase());
                })
            };
        default:
            return state;
    }
}
