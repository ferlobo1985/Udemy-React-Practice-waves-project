import React, { useState, useEffect} from 'react';
import DashboardLayout from 'hoc/dashboardLayout';
import Loader from 'utils/loader';
import CartDetail from './cartDetail';

import { useDispatch,useSelector} from 'react-redux';
import { removeFromCart, userPurchaseSuccess } from 'store/actions/user.actions';

import { PayPalButton } from 'react-paypal-button-v2';


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


    const generateUnits = () => (
        [{
            description:"Guitars and accessories",
            amount:{
                currency_code:"USD",
                value:calculateTotal(),
                breakdown:{
                    item_total:{
                        currency_code:"USD",
                        value:calculateTotal()
                    }
                }
            },
            items:generateItems()
        }]
    );

    const generateItems = () => {
        let items = props.users.cart.map((item)=>(
            {
                unit_amount:{
                    currency_code:"USD",
                    value: item.price
                },
                quantity:1,
                name: item.model
            }
        ));
        return items
    }


    useEffect(()=>{
        if(notifications && notifications.success){
            props.history.push('/dashboard')
        }
        if(notifications && notifications.error){
            setLoading(false)
        }
    },[notifications, props.history])



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
                    { loading ? 
                        <Loader/>
                    :
                    <div className="pp_button">
                        <PayPalButton
                            options={{
                                clientId:"AfSlRXnafQdgHPM6Yyn_t5HPAJz32TAP_QxoN_oFMcsLsQ3ABeqQlPNmgx5E5uW-qCtdh4Cz3NwlZy3R",
                                currency:"USD",
                                disableFunding:'credit,card'
                            }}
                            createOrder={(data,actions)=>{
                                return actions.order.create({
                                   purchase_units: generateUnits()
                                })
                            }}
                            onSuccess={(details,data)=>{
                                // console.log(details)
                                // console.log(data)
                                dispatch(userPurchaseSuccess(details.id))
                                setLoading(true);
                            }}
                            onCancel={(data)=>{
                                setLoading(false);
                            }}
                        />
                    </div>
                    }
                    
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