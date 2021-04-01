import {
    GET_SITE_VARS,
    UPDATE_SITE_VARS
} from '../types';

let DEFAULT_SITE_STATE = {
    vars:{
        _id:'',
        address:'',
        hours:'',
        phone:'',
        email:''
    }
}


export default function siteReducer(state=DEFAULT_SITE_STATE,action){
    switch(action.type){
        case GET_SITE_VARS:
            return {...state, vars: action.payload }
        case UPDATE_SITE_VARS:
            return {...state, vars: action.payload }
        default:
            return state
    }
}
