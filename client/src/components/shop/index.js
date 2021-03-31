import React,{ useEffect, useReducer, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { productsByPaginate } from 'store/actions/product.actions';
import { getAllBrands } from 'store/actions/brands.actions';

import GridOffIcon from '@material-ui/icons/GridOff';
import GridOnIcon from '@material-ui/icons/GridOn';

const defaultValues = { keywords:'',brand:[], min:0,max:100000,frets:[], page:1 }

const Shop = () => {
    const [grid, setGrid] = useState(false);
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({...state,...newState }),
        defaultValues
    );
    const { byPaginate } = useSelector(state=> state.products)
    const brands = useSelector(state => state.brands);
    const dispatch = useDispatch();


    
    const handleGrid = () => setGrid(!grid);


    useEffect(()=>{
        dispatch(getAllBrands())
    },[dispatch]);


    useEffect(()=>{
        dispatch(productsByPaginate(searchValues))
    },[setSearchValues,dispatch])

    return(
        <div className="page_container">
            <div className="page_top">
                <div className="container">
                    FORM
                </div>
            </div>
            <div className="container">
                <div className="show_wrapper">
                    <div className="left">
                        collapse brand
                        collapse frets
                        range select
                    </div>
                    <div className="right">
                        <div className="shop_options">
                            <div className="shop_grids clear">
                                <div className={`grid_btn ${grid ? '': 'active'}`}
                                    onClick={()=> handleGrid()}
                                >
                                    <GridOnIcon/>
                                </div>
                                <div className={`grid_btn ${!grid ? '': 'active'}`}
                                    onClick={()=> handleGrid()}
                                >
                                    <GridOffIcon/>
                                </div>
                            </div>
                            <div>
                                { byPaginate && byPaginate.docs ?
                                    <>
                                       
                                    </>
                                    :null
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Shop;