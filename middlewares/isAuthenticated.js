const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
    let decodedToken;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        try{
            decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        } catch(err){
            const error = new Error('Token does not match');
            error.statusCode = 401;
            throw error;
        }
        req.userId = decodedToken.userId;
        next();
    } else {
        const error = new Error('No Token given.');
        error.statusCode = 401;
        throw error;
    }
}