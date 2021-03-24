const { Site } = require('../models/site');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');


const postSiteArgs = async(req) => {
    try{
        const site = new Site({
            ...req.body
        });
        await site.save();
        return site;
    } catch(error){
        throw error;
    }
}

module.exports = {
    postSiteArgs
}