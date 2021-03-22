const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv').config();


const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    firstname:{
        type:String,
        maxLength: 100,
        trim: true,
        default:''
    },
    lastname:{
        type:String,
        maxLength: 100,
        trim: true,
        default:''
    },
    cart:{
        type:Array,
        default:[]
    },
    history:{
        type:Array,
        default:[]
    },
    varified:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User',userSchema);
module.exports = { User };
