import { Get_RESOURCES } from "../actions/types";

const initialState = {
    resources: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Get_RESOURCES:
            return {
                ...state,
                resources: action.payload
            };
        default:
            return state;
    }
}
