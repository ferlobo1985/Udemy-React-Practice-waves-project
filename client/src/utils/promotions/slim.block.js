import React from 'react';
import { WavesButton } from '../tools'

const SlimPromotion = ({items}) => {


    const renderPromotion = () => (
        items ?
        <div className="slim_promotion_img"
            style={{
                background:`url(${items.img})`
            }}
        >
            <div className="tag title">{items.lineOne}</div>
            <div className="tag low_title">{items.lineTwo}</div>
            <div className="btn">
                <WavesButton
                    type="default"
                    title={items.linkTitle}
                    linkTo={items.linkTo}
                />
            </div>
        </div>
        :null
    )

    return(
        <div className="slim_promotion">
            {renderPromotion()}
        </div>
    )



}

export default SlimPromotion;