const { Product } = require('../models/product');


const addProduct = async( body ) => {
    try {
        const product = new Product({
            ...body
        });
        await product.save();
        return product;
    } catch(error) {
        throw error
    }
}

module.exports = {
    addProduct
}