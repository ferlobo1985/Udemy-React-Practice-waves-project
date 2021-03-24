const { Brand } = require('../models/brand');

const addBrand = async( brandname ) => {
    try{
        const brand = new Brand({
            name:brandname
        });
        await brand.save();
        return brand;
    } catch(error){
        throw error;
    }
}

module.exports = {
    addBrand
}