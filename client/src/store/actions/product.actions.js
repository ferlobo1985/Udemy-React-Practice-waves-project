import * as actions from './index';
import axios from "axios"



export const productsBySort = ({ limit,sortBy,order,where}) => {
    return async(dispatch)=>{
        try{
            const products = await axios.get(`/api/products/all`,{
                params:{
                    limit,
                    sortBy,
                    order
                }
            });

            switch(where){
                case 'bySold':
                    dispatch(actions.productsBySold(products.data));
                break;
                case 'byDate':
                    dispatch(actions.productsByDate(products.data));
                break;
                default:
                    return false
            }
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}


export const productsByPaginate = (args) => {
    return async(dispatch)=>{
        try{
            const products = await axios.post(`/api/products/paginate/all`,args)
            dispatch(actions.productsByPaginate(products.data));
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}