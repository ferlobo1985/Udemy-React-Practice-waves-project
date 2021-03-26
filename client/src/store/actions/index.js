import {
    GET_PROD_BY_SOLD,
    GET_PROD_BY_DATE,
    ERROR_GLOBAL,
    SUCCESS_GLOBAL
} from '../types';




////   PRODUCTS

export const productsBySold = (data) => ({
    type: GET_PROD_BY_SOLD,
    payload: data
})

export const productsByDate = (data) => ({
    type: GET_PROD_BY_DATE,
    payload: data
})


/// NOTIFICATIONS

export const errorGlobal = (msg) => ({
    type:ERROR_GLOBAL,
    payload: msg
})


export const successGlobal = (msg) => ({
    type:SUCCESS_GLOBAL,
    payload: msg
})


