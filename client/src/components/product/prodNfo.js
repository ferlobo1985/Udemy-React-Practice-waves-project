import React, { useState } from 'react';
import { WavesButton } from 'utils/tools';
import AddToCartHandler from 'utils/addToCartHandler';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import { useSelector, useDispatch } from 'react-redux';
import { userAddToCart } from 'store/actions/user.actions';


const ProdNfo = (props) => {
    const [modal, setModal] = useState(false);
    const [errorType,setErrorType] = useState(null);
    const user = useSelector(state=>state.users);
    const dispatch = useDispatch();

    const handleClose = () => setModal(false);
    const handleAddToCart = (item) => {
        if(!user.auth){
            setModal(true);
            setErrorType('auth');
            return false
        }
        if(!user.data.verified){
            setModal(true);
            setErrorType('verify');
            return false
        }
        dispatch(userAddToCart(item))
    }


    const showProdTags = (detail) => (
        <div className="product_tags">
            <div className="tag">
                <div><LocalShippingIcon/></div>
                <div className="tag_text">
                    { detail.shipping ?
                        <div>Free shipping for US location</div>
                    :
                        <div>No free shipping for this item</div>
                    }
                </div>
            </div>
            { detail.available > 0 ?
                <div className="tag">
                    <div><DoneOutlineIcon/></div>
                    <div className="tag_text">
                        <div><strong>{detail.available}</strong> product/s in wharehouse available.</div>
                    </div>
                </div>
                :
                <div className="tag">
                    <div><SentimentVeryDissatisfiedIcon/></div>
                    <div className="tag_text">
                        <div>Sorry, product not Available at the moment</div>
                    </div>
                </div>
            }
        </div>
    )


    const showProdActions = (detail) => (
        <div className="product_actions">
            <div className="price">$ {detail.price}</div>
            <div className="cart">
                <WavesButton
                    type="add_to_cart_link"
                    runAction={() => handleAddToCart(detail)}
                />
            </div>
        </div>
    )

    const showProdSpecs = (detail) => (
        <div className="product_specifications">
            <h2>Specs:</h2>
            <div>
                <div className="item">
                    <strong>Frets:</strong> {detail.frets}
                </div>
                <div className="item">
                    <strong>Wood:</strong> {detail.woodtype}
                </div>
            </div>
        </div>
    )


    const detail = props.detail
    return(
        <div>
            <h1>{detail.brand.name} {detail.model}</h1>
            <p>
                {detail.description}
            </p>
            { showProdTags(detail)}
            { showProdActions(detail)}
            { showProdSpecs(detail)}
            <AddToCartHandler
                modal={modal}
                errorType={errorType}
                handleClose={handleClose}
            />


        </div>
    )

}


export default ProdNfo;