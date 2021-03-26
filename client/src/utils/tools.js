import { ImageSearch } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

export const WavesButton = (props) => {
    let template = '';

    switch(props.type){
        case "default":
            template = <Link
                className={
                    !props.altClass ? 'link_default': props.altClass
                }
                to={props.linkTo}
                style={{
                    ...props.style
                }}
            >
                {props.title}
            </Link>
        break;
        default:
            template='';

    }

    return template;
}


export const renderCardImage = (image) => {
    if(image.length > 0){
        return image[0]
    }else{
        return '/images/image_not_availble.png'
    }
}