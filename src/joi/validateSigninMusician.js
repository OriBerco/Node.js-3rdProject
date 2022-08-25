const joi = require('joi');

const scheme = joi.object({
    email:joi.string().required().email(),
    password:joi.string().required().min(6)
});

function validateSigninMusician(musician){
    return scheme.validate(musician);
}

module.exports = validateSigninMusician;