const { authService } = require('../services');

const authController = {
    async hello(){
        try{
            const userHello = await authService.hello();

         console.log(userHello)
        } catch( error){

        }
    }
}

module.exports = authController;