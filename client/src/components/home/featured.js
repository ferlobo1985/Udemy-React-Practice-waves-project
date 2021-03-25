import React from 'react';
import Carrousel from 'utils/carrousel'

const Featured = () => {

    const corrouselItems = [
        {
            img:'/images/featured/featured_home.jpg',
            lineOne:'Fender',
            lineTwo:'Custom shop',
            linkTitle:'Show Now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_2.jpg',
            lineOne:'B-Stock',
            lineTwo:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        }
    ]


    return(
        <div className="featured_container">
            <Carrousel items={corrouselItems}/>
        </div>
    )
}

export default Featured;