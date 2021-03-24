const { productsService } = require('../services')

const productsController = {
    async addProduct(req,res,next){
        try{
            const product = await productsService.addProduct(req.body);
            res.json(product)
        } catch(error){
            next(error)
        }
    }
}





// {
//     "model":"Jet bt gold",
//     "brand":"6049a1ad9c9a2615b86c04f2",
//     "frets":22,
//     "woodtype":"Mahogany",
//     "description":"This is the content of the post",
//     "price":239,
//     "available":19,
//     "itemsSold":10,
//     "shipping":true
// }


module.exports = productsController