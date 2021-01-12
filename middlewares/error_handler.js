const error_handler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (process.env.NODE_ENV === "production") err.message = "";

    return res.status(500).json({ message: err.message });

}

module.exports = error_handler;