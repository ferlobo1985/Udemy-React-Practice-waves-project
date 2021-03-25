import React from 'react';
import Slider from 'react-slick';
import { WavesButton } from 'utils/tools';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carrousel = ({items}) => {

    const settings = {
        dot:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false
    }

    const generateSlides = () => (
        items ?
            items.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background:`url(${item.img})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                        <div className="featured_action">
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <div>
                                <WavesButton
                                   type="default"
                                   title={item.linkTitle} 
                                   linkTo={item.linkTo}
                                   style={{
                                       margin:'10px 0 0 0'
                                   }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        :null
    );

    return(
        <Slider {...settings}>
            { generateSlides()}
        </Slider>
    )


}

export default Carrousel;