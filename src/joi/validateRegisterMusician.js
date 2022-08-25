const joi = require('joi');

const schema = joi.object({
    name:joi.string().required(),
    email:joi.string().required().email(),
    password:joi.string().required(),
    isActiveMusician:joi.boolean().required()
});

function validateRegisterMusician(musician){
    return schema.validate(musician);
}

module.exports = validateRegisterMusician;