const expressJwt = require('express-jwt');
const secret = "62cb5757449177f69896654ee30d330a";

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/user/login'
        ]
    });
}
module.exports = jwt;