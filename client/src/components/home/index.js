import React from 'react';
import Featured from './featured';
import SlimPromotion from 'utils/promotions/slim.block';


const slimPromotion = {
    img:'/images/featured/featured_home_3.jpg',
    lineOne:'Up to 40% off',
    lineTwo:'In second hand guitar',
    linkTitle:'Show Now',
    linkTo:'/shop'
};

const Home = () => {

    return(
        <div>
            <Featured/>
            <SlimPromotion items={slimPromotion}/>
        </div>
    )

}

export default Home;