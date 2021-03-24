const { siteService } = require('../services');

const siteController = {
    async postSiteArgs(req,res,next){
        try{
            const site = await siteService.postSiteArgs(req);
            res.json(site);
        } catch(error){
            next(error)
        }
    }
};

module.exports = siteController