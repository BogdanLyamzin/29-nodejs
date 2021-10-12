const controllerWrapper = (ctrl) => {
    return async(req, res, next) => {
        try {
            await ctrl(req, res, next);
        } 
        catch (error) {
            if(error.name === "CastError"){
                error.status = 404;
            }
            // if(error.message.includes("Cast to ObjectId failed")){
            //     error.status = 404;
            // }
            next(error);
        }
    }
};

module.exports = controllerWrapper;