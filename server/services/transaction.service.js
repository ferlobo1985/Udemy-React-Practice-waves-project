const { Transaction }  = require('../models/transaction');
const { User } = require('../models/user');

const payPalClient = require('../utils/ppclient');
const checkoutNodeJssdk =require('@paypal/checkout-server-sdk');

const addTransaction = async(req) => {
    let request = new checkoutNodeJssdk.orders.OrdersGetRequest(req.body.orderID);
    let order;

    try {
        order = await payPalClient.client.execute(request);
        //// error
        const transaction = new Transaction({
            userID:req.user._id,
            userEmail:req.user.email,
            orderID:req.body.orderID,
            orderData:order.result,
        });
        await transaction.save();
        
        const user = await User.findOneAndUpdate(
            {_id:req.user._id},
            { "$push":{
                history:[
                    {
                        transactionId:transaction._id,
                        date: transaction.date,
                        orderID:req.body.orderID,
                        amount: transaction.orderData[0].purchase_units[0].amount.value,
                        items:  transaction.orderData[0].purchase_units[0].items,
                    }
                ]
            }},
            { new:true }
        )

        /// error
        return user;
    }catch(error){
        throw error;
    }
}


module.exports = {
    addTransaction
}