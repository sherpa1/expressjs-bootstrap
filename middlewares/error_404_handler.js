const error_404_handler = (req, res, next) => {
    return res.status(404).json({ message: 'Not Found' });
};

module.exports = error_404_handler;