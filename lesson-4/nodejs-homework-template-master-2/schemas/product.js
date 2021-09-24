const Joi = require("joi");

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required()
});

module.exports = joiSchema;