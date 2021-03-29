import React, { useEffect, useReducer } from 'react';
import DashboardLayout from 'hoc/dashboardLayout';
import ProductsTable from './productsTable';

import { useDispatch, useSelector } from 'react-redux'
import { productsByPaginate } from 'store/actions/product.actions';


const defaultValues = { keywords:'',brand:[], min:0,max:5000,frets:[], page:2 }

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
        <DashboardLayout title="Products">
            <div className="products_table">

                <div>
                    search
                </div>
                <hr/>
                <ProductsTable
                    prods={products.byPaginate}
                
                />


            </div>

        </DashboardLayout>
    )

}

export default AdminProducts

