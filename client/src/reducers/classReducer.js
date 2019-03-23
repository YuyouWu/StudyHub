import { GET_CLASSES, GET_CLASS } from '../actions/types';

var initialState = {};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
            };
        case GET_CLASS:
            return{
                ...state,
            };
        default:
            return state;
    }
}

