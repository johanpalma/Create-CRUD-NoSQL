const Joi = require('joi');

const OrderSchema = Joi.object().keys({
    carrier_id: Joi.string(),
    provider: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    description_order: Joi.string(),
    quantity: Joi.number(),
    unit_price: Joi.number(), // product price excluding tax
    total_price: Joi.number(), //price with tax
    delivery_date: Joi.date(),
})

module.exports = OrderSchema;