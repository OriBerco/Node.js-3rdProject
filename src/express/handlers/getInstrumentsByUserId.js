const operations = require('../../mongoose/instrumentOperations');

async function getAllUserInstruments(req, res) {
    const instrumentsUserId = req.query.userId;

    if (instrumentsUserId == null)
        return res.status(400).json('Please provide ID');
    const getUserInstruments = await operations.getInstrumentsByUserId(instrumentsUserId)


    res.json(getUserInstruments);
}

module.exports = getAllUserInstruments;