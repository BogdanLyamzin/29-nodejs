const {Schema, model} = require("mongoose");
const Joi = require("joi");

const codeRegexp = /^[0-9]{9}$/;

const productSchema = Schema({
    name: {
        type: String,
        required: [true, "У товара должно быть имя"],
        minlength: 2
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    active: {
        type: Boolean,
        default: true
    },
    status: {
        type: String, // "sale", "stock", "promocode"
        enum: ["sale", "stock", "promocode"],
        default: "sale"
    },
    code: {
        type: String,
        required: true,
        unique: true,
        match: codeRegexp
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price:Joi.number().min(0.01).required(),
    active: Joi.boolean(),
    status: Joi.string(),
    code: Joi.string().pattern(codeRegexp).required()
});

const Product = model("product", productSchema);

module.exports = {
    Product,
    joiSchema
}