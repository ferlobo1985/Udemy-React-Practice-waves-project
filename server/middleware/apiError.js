const mongoose = require('mongoose');
const httpStatus = require('http-status');


class ApiError extends Error {
    constructor(statusCode,message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }   
}

const handleError = (err,res) => {
    const { statusCode,message } = err;
    res.status(statusCode).json({
        status:'error',
        statusCode,
        message
    });
}

const convertToApiError = (err,req,res,next) => {
    let error = err;
    if(!(error instanceof ApiError)){
        const statusCode = error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST: httpStatus.INTERNAL_SERVER_ERROR;
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode,message)
    }
    next(error)
}


module.exports = {
    ApiError,
    handleError,
    convertToApiError
}

