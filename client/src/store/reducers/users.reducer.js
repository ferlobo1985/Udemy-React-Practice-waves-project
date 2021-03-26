// import {

// } from '../types';



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
        default:
            return state
    }
}
