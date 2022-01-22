module.exports = errorHandler;

function errorHandler(err, req, res, next) {

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Token mevcut değil bi login olsan iyi olur' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}