const error_handler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (process.env.NODE_ENV === "production") err.message = "";

    return res.sendStatus(500);

}

module.exports = error_handler;