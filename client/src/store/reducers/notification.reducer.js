import {
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    REMOVE_PRODUCT,
} from '../types';




export default function notificationsReducer(state={},action){
    switch(action.type){
        case ERROR_GLOBAL:
            return {...state, error: true, msg: action.payload}
        case SUCCESS_GLOBAL:
            return {...state, success: true, msg: action.payload}
        case CLEAR_NOTIFICATION:
            return {}
        case REMOVE_PRODUCT:
            return { ...state, removeArticle: true}
        default:
            return state
    }
}
