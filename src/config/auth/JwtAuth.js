const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET;

function verifyAutenticationJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Token inválido'
            });
        }
        req.username = decoded.username;
        req.tipo = decoded.tipo;
        next();
    });
}


module.exports = verifyAutenticationJWT;