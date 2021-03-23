const { User } = require("../models/user")


const findUserByEmail = async(email) =>{
    return await User.findOne({email:email})
}


module.exports = {
    findUserByEmail
}