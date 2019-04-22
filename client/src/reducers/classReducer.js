import { GET_CLASSES, GET_CLASS, SET_CURRENT_CLASS, GET_CURRENT_CLASS } from '../actions/types';

var initialState = {
    currentClassID: 'none'
};
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
        case SET_CURRENT_CLASS:
            return{
                ...state,
                currentClassID: action.payload
            };
        case GET_CURRENT_CLASS:
            return{
                ...state,
            };
        default:
            return state;
    }
}

