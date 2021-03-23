const { userService } = require('../services');
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');

const usersController = {
    async profile(req,res, next){
        try{
            const user = await userService.findUserById(req.user._id);
            if(!user){
                throw new ApiError(httpStatus.NOT_FOUND,'User not found')
            }
            res.json(res.locals.permission.filter(user._doc))
        }catch(error){
            next(error);
        }
    }
}

module.exports = usersController;