const { authService } = require('../services');

const authController = {
    async register(req, res, next){
        try{
            const { email, password } = req.body;
            const user = await authService.createUser(email, password);
            const token = await authService.genAuthToken(user)


            res.cookie('x-access-token',token).status(200).send({
                user,
                token
            });
        } catch( error){
            console.log(error)
        }
    },
    async signin(req, res, next){
        try{

        } catch(error){

        }
    },
    async isauth(req, res, next){
        try{

        } catch(error){

        }
    }
}

module.exports = authController;