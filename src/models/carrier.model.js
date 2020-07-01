const Joi = require('joi');

const CarrierSchema = Joi.object().keys({
    name: Joi.string().required(),
    scac: Joi.string().required(),
    mc: Joi.number(),
    dot: Joi.number(),
    fein: Joi.string(),
})

module.exports = CarrierSchema;