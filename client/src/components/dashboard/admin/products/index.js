import React, { useEffect, useReducer, useState } from 'react';
import DashboardLayout from 'hoc/dashboardLayout';
import ProductsTable from './productsTable';

import { useDispatch, useSelector } from 'react-redux'
import { productsByPaginate, productRemove } from 'store/actions/product.actions';


const defaultValues = { keywords:'',brand:[], min:0,max:5000,frets:[], page:1 }

const AdminProducts = (props) => {
    const [removeModal, setRemoveModal] = useState(false);
    const [toRemove, setToRemove] = useState(null)


    const products = useSelector(state => state.products);
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({...state,...newState }),
        defaultValues
    )

    const gotoEdit = (id) => {
        props.history.push(`/dashboard/admin/edit_product/${id}`)
    } 


    const gotoPage = (page) => {
        setSearchValues({page:page});
    }

    const handleCose = () => {
        setRemoveModal(false)
    }

    const handleModal = (id) => {
        setToRemove(id);
        setRemoveModal(true)
    }

    const handleRemove = () => {
       dispatch(productRemove(toRemove))
    }

    useEffect(()=>{
        dispatch(productsByPaginate(searchValues))
    },[dispatch,searchValues])

    useEffect(()=>{
        handleCose();
        setRemoveModal(null)
        if(notifications && notifications.removeArticle){
            dispatch(productsByPaginate(searchValues))
        }
    },[dispatch, notifications])




    return(
        <DashboardLayout title="Products">
            <div className="products_table">

                <div>
                    search
                </div>
                <hr/>
                <ProductsTable
                    removeModal={removeModal}
                    prods={products.byPaginate}
                    prev={(page)=> gotoPage(page)}
                    next={(page)=> gotoPage(page)}
                    gotoEdit={(id)=> gotoEdit(id)}
                    handleClose={()=> handleCose()}
                    handleModal={(id)=> handleModal(id)}
                    handleRemove={()=> handleRemove()}
                />


            </div>

        </DashboardLayout>
    )

}

export default AdminProducts

