import React, { useEffect, useReducer } from 'react';
import DashboardLayout from 'hoc/dashboardLayout';

import { useDispatch, useSelector } from 'react-redux'
import { productsByPaginate } from 'store/actions/product.actions';


const defaultValues = { keywords:'',brand:[], min:0,max:5000,frets:[], page:1 }

const AdminProducts = (props) => {
    const products = useSelector(state => state.products);
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({...state,...newState }),
        defaultValues
    )


    useEffect(()=>{
        dispatch(productsByPaginate(searchValues))
    },[dispatch,searchValues])



    return(
        <DashboardLayout>


            return something
        </DashboardLayout>
    )

}

export default AdminProducts

