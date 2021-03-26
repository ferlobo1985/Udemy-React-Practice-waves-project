import React, { useEffect } from 'react';
import Featured from './featured';
import SlimPromotion from 'utils/promotions/slim.block';

import { useDispatch, useSelector } from 'react-redux';
import { myDog } from 'store/actions'


const slimPromotion = {
    img:'/images/featured/featured_home_3.jpg',
    lineOne:'Up to 40% off',
    lineTwo:'In second hand guitar',
    linkTitle:'Show Now',
    linkTo:'/shop'
};

const Home = () => {
    const user = useSelector( state => state.users)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(myDog())

    },[dispatch])


console.log(user)

    return(
        <div>
            <Featured/>
            <SlimPromotion items={slimPromotion}/>
        </div>
    )

}

export default Home;