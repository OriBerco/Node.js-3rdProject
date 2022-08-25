const operations = require('../../mongoose/instrumentOperations');
const validate = require('../../joi/validateCreateInstrumentCard');

async function createInstrumentCard(req,res){
    const result = validate(req.body);
    if(result.error)
    return res.status(400).json(result.error.details[0].message);
    req.body.userId = req.userID;
    const instrumentCard = await operations.createInstrumentCard(req.body);

    if(instrumentCard == null){
        return res.status(500).json('Error, card not saved.');
    }
res.json(instrumentCard)

}

module.exports = createInstrumentCard;
