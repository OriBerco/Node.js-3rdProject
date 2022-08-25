const operations = require('../../mongoose/instrumentOperations');

async function updateInstrumentCardById(req,res){
    const instrumentCardId = req.query.cardId;
    const updatedCard = req.body;
    if(
        instrumentCardId==null
    )
    return res.status(400).json('Please provide instrument ID');
const updateInstrument = operations.updateInstrumentCard(instrumentCardId, updatedCard);
if(updateInstrument == null)
return res.status(401).json('Error occurd');

return res.json('Updated successfully');
}

module.exports = updateInstrumentCardById;