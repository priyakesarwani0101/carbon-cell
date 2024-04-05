const jwt = require('jsonwebtoken');
const { jwt_secret_key } = require('./vars')

async function auth(req, res, next) {
    let authorization = req.headers.authorization;
    if (authorization) {
        let token = authorization.split(' ').pop();
        try {
            if (token) {
                jwt.verify(token, jwt_secret_key);
                const user = jwt.decode(token);
                req.user = user;
                next();
            }
        } catch (error) {
            return res.status(400).send({
                error: 'Invalid token provided'
            })
        }
    } else {
        return res.status(400).send({
            error: 'No token provided'
        })
    }
}

module.exports = auth;