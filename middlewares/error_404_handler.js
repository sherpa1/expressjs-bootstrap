const error_404_handler = (req, res, next) => {
    return res.sendStatus(404);
};

module.exports = error_404_handler;