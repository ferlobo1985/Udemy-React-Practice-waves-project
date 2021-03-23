const { userService, authService } = require('../services');
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
    },
    async updateProfile(req,res, next){
        try{
            const user = await userService.updateUserProfile(req);
            res.json(user); ///. filter response fields
        }catch(error){
            next(error);
        }
    },
    async updateUserEmail(req,res, next){
        try{
            const user = await userService.updateUserEmail(req);
            const token = await authService.genAuthToken(user);

            // send email to verify account

            res.cookie('x-access-token',token)
            .send({
                user,
                token
            })           
        }catch(error){
            next(error);
        }
    },
}

module.exports = usersController;