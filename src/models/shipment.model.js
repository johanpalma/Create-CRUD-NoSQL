const Joi = require('joi');

const ShipmentSchema = Joi.object().keys({
    carrier_id: Joi.string(),
    date: Joi.date().default(Date.now, 'time of creation'),
    origin_country: Joi.string().required(),
    origin_state: Joi.string().required(),
    origin_city: Joi.string().required(),
    destination_country: Joi.string().required(),
    destination_state: Joi.string().required(),
    destination_city: Joi.string().required(),
    pickup_date: Joi.date(),
    delivery_date: Joi.date(),
    status: Joi.string().required(),
    carrier_rate: Joi.number().required()
})

module.exports = ShipmentSchema;