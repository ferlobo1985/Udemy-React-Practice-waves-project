const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const productSchema = mongoose.Schema({
    model:{
        required:[true,'You need a guitar model'],
        type:String,
        unique:1,
        maxlength:250
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required:true
    },
    frets:{
        required: true,
        type: Number
    },
    woodtype:{
        type: String,
        required:true
    },
    description:{
        required:[true,'Ypu need a description'],
        type:String,
        maxlength:10000
    },
    price:{
        required:true,
        type: Number,
        maxlength:255
    },
    available:{
        required:[true,'How many of this model we own'],
        type:Number,
        maxlength:5000,
        default:0
    },
    itemSold:{
        required:true,
        type:Number,
        default:0
    },
    shipping:{
        type:Boolean,
        required:[true,'Specify if this product has free shipping'],
        default:false
    },
    images:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default: Date.now
    }
});

productSchema.plugin(aggregatePaginate);

const Product = mongoose.model('Product',productSchema);
module.exports = {
    Product
}