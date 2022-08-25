const operations = require('../../mongoose/musicianOperations');
const validate = require('../../joi/validateRegisterMusician');


async function registerMusician(req,res){
const {error} =  validate(req.body)

if (error)
return res.status(400).json(error.details[0].message);

    const musicianDetails = await operations.registerMusician(req.body);
    if(musicianDetails == null)
    return res.json('Musician not added, please check details');
    res.json({
        name: musicianDetails.name,
        id: musicianDetails._id,
        email: musicianDetails.email
    });

    
}
module.exports = registerMusician;