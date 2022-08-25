const operations = require('../../mongoose/instrumentOperations');

async function deleteOneInstrumentCard(req, res) {
    const instrumentId = req.query.cardId;

    if (instrumentId == null)
        return res.status(400).json('Please provide ID');

    const instrumentDeletion = operations.deleteInstrumentCard(instrumentId)
    if (instrumentDeletion != null) {
         res.json('Deleted Successfully.');
        return instrumentDeletion
    }



    return res.status(401).json('Error occured');
}

module.exports = deleteOneInstrumentCard;