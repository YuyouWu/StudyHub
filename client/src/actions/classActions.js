import axios from 'axios';
import { GET_CLASSES, GET_CLASS } from './types';

var headers = {
    'x-auth': localStorage.getItem('jwtToken')
}

export const getClasses = () => dispatch => {
    return (
        axios.get('/api/classes/get', { headers: headers }).then(res =>
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            })
        )
    )
}

export const getClass = (classID) => dispatch => {
    return (
        axios.get('/api/classes/' + classID, { headers: headers }).then(res =>
            dispatch({
                type: GET_CLASS,
                payload: res.data
            })
        )
    )
}