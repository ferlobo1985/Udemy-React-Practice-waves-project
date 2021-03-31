import React, { useEffect, useState } from 'react';
import ProdNfo from './prodNfo';

import { useDispatch, useSelector } from 'react-redux';
import { productsById } from 'store/actions/product.actions';
import { clearCurrentProduct } from 'store/actions'

import { renderCardImage } from 'utils/tools'
import Loder from 'utils/loader';



const ProductDetail = (props) => {
    const products = useSelector(state=> state.products);
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(productsById(props.match.params.id))
    },[dispatch, props.match.params.id]);


    useEffect(()=>{
        return()=>{
            dispatch(clearCurrentProduct())
        }
    },[dispatch])


    return(
        <div className="page_container">
            <div className="page_top">
                <div className="container">
                    Product detail
                </div>
            </div>
            <div className="container">
                { products && products.byId ?
                    <div className="product_detail_wrapper">
                        <div className="left">
                            <div>
                                <img
                                    alt="some alt"
                                    src={renderCardImage(products.byId.images)}
                                    onClick={()=> alert('show carrousel')}
                                >
                                </img>
                            </div>
                        </div>
                        <div className="right">
                            <ProdNfo
                                detail={products.byId}
                            />
                        </div>
                    </div>
                :
                    <Loder/>
                }


            </div>
        </div>
    )
}

export default ProductDetail;
