const path = require('path');

require('dotenv-safe').config({
    path: path.join(__dirname, '../../.env'),
    example: path.join(__dirname, '../../.env.example')
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    jwt_secret_key: process.env.JWT_SECRET_KEY
}