var jwt = require('jsonwebtoken');

const createToken = (userData) => {
    return jwt.sign({ userData }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

module.exports = {createToken};