const { User } = require("../models/user")


const findUserByEmail = async(email) =>{
    return await User.findOne({email:email})
}

const findUserById =  async(_id) =>{
    return await User.findById(_id);
}



module.exports = {
    findUserByEmail,
    findUserById
}