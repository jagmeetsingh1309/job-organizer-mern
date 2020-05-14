const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
    let decodedToken;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        try{
            decodedToken = jwt.verify(token, 'mysecret123456789');
        } catch(err){
            const error = new Error();
            error.statusCode = 401;
            error.message = 'Token does not match';
            throw error;
        }
        req.userId = decodedToken.userId;
        next();
    } else {
        const error = new Error();
        error.statusCode = 401;
        error.message = 'No Token given.';
        throw error;
    }
}