import React,{ useState } from 'react';
import { renderCardImage , WavesButton} from '../tools';
import AddToCartHandler from 'utils/addToCartHandler';

import { useSelector,useDispatch } from 'react-redux';
import { userAddToCart } from 'store/actions/user.actions';


const Card = (props)=> {
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


    return(
        <div className={`card_item_wrapper ${props.grid ? 'grid_bars':''}`}>
            <div
                className="image"
                style={{
                    background:`url(${renderCardImage(props.item.images)})`
                }}
            ></div>
            <div className="action_container">
                <div className="tags">
                    <div className="brand">{props.item.brand.name}</div>
                    <div className="name">{props.item.model}</div>
                    <div className="name">${props.item.price}</div>
                </div>

                { props.grid ?
                    <div className="description">
                        <p>
                            {props.item.description}
                        </p>
                    </div>
                :null}

                <div className="actions">
                    <div className="button_wrapp">
                        <WavesButton
                            type="default"
                            altClass="card_link"
                            title="View product"
                            linkTo={`/product_detail/${props.item._id}`}
                            style={{
                                fontWeight:'bold'
                            }}
                        />
                    </div>
                    <div className="button_wrapp">
                        <WavesButton
                            type="bag_link"
                            runAction={ ()=> handleAddToCart(props.item) }
                            iconSize="23"
                        />
                    </div>
                </div>
            </div>

            <AddToCartHandler
                modal={modal}
                errorType={errorType}
                handleClose={handleClose}
            />

        </div>
    )

}

export default Card;