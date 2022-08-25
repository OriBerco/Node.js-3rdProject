const operations = require('../../mongoose/musicianOperations');
const validate = require('../../joi/validateSigninMusician');
const jwt = require('jsonwebtoken');

async function signinMusician(req, res){
    const {error} = validate(req.body);
    if(error)
    return res.status(400).json(error.details[0].message);
    const {email,password} = req.body;
    const credentialsFromDB = await operations.musicianSignin(email,password);
    if(credentialsFromDB == null)
    res.json('User does not exist');
    const token = jwt.sign({
        musicianid:credentialsFromDB._id,
        isActiveMusician:credentialsFromDB.isActiveMusician
    }, 'myKey')
    res.json(token)

    

}
module.exports = signinMusician;