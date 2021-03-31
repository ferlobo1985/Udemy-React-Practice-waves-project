import {
    AUTH_USER,
    SIGN_OUT,
    UPDATE_USER_PROFILE,
    USER_CHANGE_EMAIL,
    USER_ADD_TO_CART,
    PURCHASE_SUCCESS
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
        case UPDATE_USER_PROFILE:
            return { ...state, data: {...action.payload }}
        case USER_CHANGE_EMAIL:
            return {
                ...state,
                data:{ ...state.data, email: action.payload }
            }
        case USER_ADD_TO_CART:
            return {...state, cart: action.payload}
        case PURCHASE_SUCCESS:
            return {...state,
                data:{
                    ...state.data,
                    history: action.payload.history
                },
                cart:[]            
            }
        default:
            return state
    }
}
