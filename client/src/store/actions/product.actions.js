import * as actions from './index';
import axios from "axios"



export const productsBySort = ({ limit,sortBy,order,where}) => {
    return async(dispatch)=>{
        try{
            const products = await axios.get(`/api/products/al`,{
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
            console.log(error)
            dispatch(actions.successGlobal(error.response.data.message))
            
        }
    }
}