const joi = require('joi');

const scheme = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    model: joi.string().required(),
    manufacturer: joi.string().required(),
    manufacturingyear: joi.string().required(),
    instrumentimage:joi.string().required()
});

function validateInstrument(instrumentDetails) {
    return scheme.validate(instrumentDetails);
}
module.exports = validateInstrument;