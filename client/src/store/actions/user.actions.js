import * as actions from './index';
import axios from "axios"

import { getAuthHeader, removeTokenCookie, getTokenCookie } from '../../utils/tools';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const userRegister = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/register`,{
                email:values.email, 
                password:values.password
            });
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome !! check you mail to verify account.'))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}


export const userSignIn = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/signin`,{
                email:values.email, 
                password:values.password
            });
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome!!'))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}


export const userIsAuth = () => {
    return async(dispatch)=>{
        try{
            const site = await axios.get(`/api/site`);
            dispatch(actions.siteGetVars(site.data))

            if(!getTokenCookie()){
                throw new Error();
            }
            const user = await axios.get(`/api/auth/isauth`, getAuthHeader());
            dispatch(actions.userAuthenticate({data: user.data,auth: true}))
        } catch(error){
            dispatch(actions.userAuthenticate({data:{},auth:false}));
        }
    }
}

export const userSignOut = () => {
    return async(dispatch)=> {
        removeTokenCookie();
        dispatch(actions.userSignOut())
        dispatch(actions.successGlobal('Good bye !!'))
    }
}

export const userUpdateProfile = (data) => {
    return async(dispatch, getState )=>{
        try{
            const profile =await axios.patch(`/api/users/profile`,{
                data:data
            }, getAuthHeader());

            const userData ={
                ...getState().users.data,
                firstname: profile.data.firstname,
                lastname:  profile.data.lastname,
            }
            dispatch(actions.userUpdateProfile(userData))
            dispatch(actions.successGlobal('Profile updated !!'))
        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
} 


export const userChangeEmail = (data) => {
    return async(dispatch )=>{
        try{
            await axios.patch(`/api/users/email`,{
                email: data.email,
                newemail: data.newemail
            }, getAuthHeader());

            dispatch(actions.userChangeEmail(data.newemail))
            dispatch(actions.successGlobal('Good job, Remember to verify your account !!'))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}  



export const userAddToCart = (item) => {
    return async(dispatch, getState)=>{
        try{
            const cart = getState().users.cart;
            dispatch(actions.userAddToCart([
                ...cart,
                item
            ]))
            dispatch(actions.successGlobal(`${item.model} added to cart :)`))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}  




export const removeFromCart = (position) => {
    return async(dispatch, getState)=>{
        try{
            const cart = getState().users.cart;
            cart.splice(position,1);

            dispatch(actions.userAddToCart(cart));
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}  


export const userPurchaseSuccess = (orderID) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/transaction/`,{
                orderID
            },getAuthHeader());

            dispatch(actions.successGlobal('Thank you !!'));
            dispatch(actions.userPurchaseSuccess(user.data))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}