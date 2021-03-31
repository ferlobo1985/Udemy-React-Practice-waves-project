const { Product } = require('../models/product');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');
const mongoose = require('mongoose');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dxxrvghna',
    api_key: '175755222729838',
    api_secret:`${process.env.CN_API_SECRET}`
});


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

const getProductById =  async( _id ) => {
    try {
        const product = await Product.findById(_id).populate('brand') 
        if(!product) throw new ApiError(httpStatus.NOT_FOUND,'Product not found');
        return product;
    } catch(error) {
        throw error
    }
}

const updateProductById = async( _id, body ) => {
    try {
        const product = await Product.findOneAndUpdate(
            {_id},
            { "$set": body },
            { new: true } 
        );
        if(!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
        return product
    } catch(error) {
        throw error
    }
}
 
const deleteProductById = async( _id  ) => {
    try {
        const product = await Product.findByIdAndRemove(_id);
        if(!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
        return product
    } catch(error) {
        throw error
    }
}

const allProducts = async(req) => {

    try {
        const products = await Product
        .find({})
        .populate('brand')
        .sort([
            [req.query.sortBy,req.query.order]
        ])
        .limit(parseInt(req.query.limit));

        return products
    } catch(error) {
        throw error
    }
}


const paginateProducts = async(req) => {
    try {

        // const example = {
        //     "keywords":"elite",
        //     "brand":["605ad1e70738255874af0972","605ad1e70738255874af0972"],
        //     "min":200,
        //     "max":500,
        //     "frets":24
        // }

        let aggQueryArray = [];


        if(req.body.keywords && req.body.keywords != ''){
            const re = new RegExp(`${req.body.keywords}`,'gi');
            aggQueryArray.push({
                $match:{ model:{ $regex:re }}
            });
        }

        if(req.body.brand && req.body.brand.length > 0){
            let newBrandsArray = req.body.brand.map((item)=>(
                mongoose.Types.ObjectId(item)
            ));
            aggQueryArray.push({
                $match:{ brand:{ $in: newBrandsArray }}
            });
        }


        if(req.body.frets && req.body.frets.length > 0){
            aggQueryArray.push({
                $match:{ frets: { $in: req.body.frets }}
            });
        }
       
        if(req.body.min && req.body.min > 0 || req.body.max && req.body.max < 5000){
            /// { $range: { price:[0,100 ]}} /// not supported

            if(req.body.min){
                aggQueryArray.push({ $match: { price:{ $gt: req.body.min }}});
                /// minimum price , guitar with a price greater than xxx
            }
            if(req.body.max){
                aggQueryArray.push({ $match: { price:{ $lt: req.body.max }}});
                /// maximum price , guitar with a price lower than xxx
            }
        }

        //// add populate
        aggQueryArray.push(
            { $lookup:
                {
                    from: "brands",
                    localField: "brand",
                    foreignField:"_id",
                    as: "brand"
                }
            },
            { $unwind: '$brand'}
        )    
        /////////

        console.log(aggQueryArray)

        let aggQuery = Product.aggregate(aggQueryArray);
        const options = {
            page:req.body.page,
            limit:6,
            sort:{ date:'desc' }
        };
        const products = await Product.aggregatePaginate(aggQuery,options);
        return products;
    } catch(error) {
        throw error
    }
}

const picUpload = async(req) => {
    try{
        const upload = await cloudinary.uploader.upload(req.files.file.path,{
            public_id:`${Date.now()}`,
            folder:'waves_upload'
        });

        return {
            public_id: upload.public_id,
            url: upload.url
        }
    } catch(error){
        throw error
    }
}

module.exports = {
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    allProducts,
    paginateProducts,
    picUpload
}