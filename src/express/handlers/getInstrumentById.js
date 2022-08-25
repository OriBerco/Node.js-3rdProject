const operations = require('../../mongoose/instrumentOperations');

async function getInstrumentCardById(req, res) {
    const cardId = req.query.cardId;
    if (!cardId)
        return res.status(400).json('Please provide ID.')
    const instrumentCardId = await operations.getInstrumentById(cardId);
    if (instrumentCardId == null)
        return res.json('Error providing card');

    res.json (instrumentCardId);

}

module.exports = getInstrumentCardById;