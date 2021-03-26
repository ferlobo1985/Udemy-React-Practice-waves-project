import {
    GET_PROD_BY_SOLD,
    GET_PROD_BY_DATE
} from '../types';


export default function productsReducer(state={},action){
    switch(action.type){
        case GET_PROD_BY_SOLD:
            return {...state, bySold: action.payload }
        case GET_PROD_BY_DATE:
            return {...state, byDate: action.payload }
        default:
            return state
    }
}