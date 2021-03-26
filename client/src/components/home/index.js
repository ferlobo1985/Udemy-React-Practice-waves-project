import React, { useEffect } from 'react';
import Featured from './featured';
import SlimPromotion from 'utils/promotions/slim.block';

import { useDispatch, useSelector } from 'react-redux';
import { productsBySort } from 'store/actions/product.actions';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

const slimPromotion = {
    img:'/images/featured/featured_home_3.jpg',
    lineOne:'Up to 40% off',
    lineTwo:'In second hand guitar',
    linkTitle:'Show Now',
    linkTo:'/shop'
};

const Home = () => {
    const { bySold, byDate } = useSelector(state => state.products)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(productsBySort({
            limit:4,sortBy:'itemSold',order:'desc',where:'bySold'
        }));

        dispatch(productsBySort({
            limit:4,sortBy:'date',order:'desc',where:'byDate'
        }));
    },[dispatch])


    console.log(bySold)
    // console.log(byDate)

    return(
        <div>
            <Featured/>
            <SlimPromotion items={slimPromotion}/>
        </div>
    )

}

export default Home;