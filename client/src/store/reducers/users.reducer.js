import {
    AUTH_USER,
    SIGN_OUT
} from '../types';



let DEFAULT_USER_STATE = {
    data:{
        _id:null,
        email:null,
        firstname:null,
        lastname:null,
        history:[],
        verified:null
    },
    auth:null,
    cart:[]
}

export default function usersReducer(state=DEFAULT_USER_STATE,action){
    switch(action.type){
        case AUTH_USER:
            return { ...state,
               data: { ...state.data, ...action.payload.data },
               auth: action.payload.auth
            }
        case SIGN_OUT:
            return {...state, 
                data: { ...DEFAULT_USER_STATE.data },
                auth:false
            }
        default:
            return state
    }
}
