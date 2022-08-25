const jwt = require('jsonwebtoken');

async function authenticateMusician(req, res, next) {
    const token = req.headers.token;
    if (!token)
        return res.status(401).json({'message':'Token not provided.'});
    try {
        const data = jwt.verify(token, 'myKey');
        req.userID = data.musicianid;
        next();
    } catch {
        return res.status(401).json({'message':'Ilegal token'})
    }
}
module.exports = authenticateMusician;