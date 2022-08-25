const operations = require('../../mongoose/musicianOperations');

async function detailsOfMusician(req,res){
    const musician = await operations.getMusicianDetailsById(req.userID);
    res.json(musician)
}
module.exports = detailsOfMusician