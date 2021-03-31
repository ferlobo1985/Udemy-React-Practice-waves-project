import React, { useState, useEffect} from 'react';
import DashboardLayout from 'hoc/dashboardLayout';
import Loder from 'utils/loader';
import CartDetail from './cartDetail';

import { useDispatch,useSelector} from 'react-redux';
import { removeFromCart } from 'store/actions/user.actions';



const UserCart = (props) => {
    const [loading,setLoading] = useState(false);
    const notifications = useSelector(state=>state.notifications);
    const dispatch = useDispatch();


    const removeItem = (position) => {
        dispatch(removeFromCart(position))
    }


    const calculateTotal = () => {
        let total = 0;
        props.users.cart.forEach(item=>{
            total += parseInt(item.price, 10);
        });
        return total;
    }


    return(
        <DashboardLayout title="Your Cart">
            { props.users.cart && props.users.cart.length > 0 ?
                <>  
                    <CartDetail
                        products={props.users.cart}
                        removeItem={(position)=>removeItem(position)}
                    />
                    <div className="user_cart_sum">
                        <div>
                            Total amount: ${calculateTotal()}
                        </div>
                    </div>
                </>
            :
                <div>
                    There is nothing in your cart
                </div>
            }
        </DashboardLayout>
    )

}

export default UserCart;