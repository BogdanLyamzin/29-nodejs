const express = require("express");
// const createError = require("http-errors");
const { NotFound, BadRequest } = require("http-errors");
const Joi = require("joi");

const productsOperations = require("../../model/products");

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required()
});

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await productsOperations.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                products
            }
        });
    }
    catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productsOperations.getById(id);
        if (!product) {
            throw new NotFound(`Product with id=${id} not found`);
            // throw new createError(404, `Product with id=${id} not found`);

            // const error = new Error(`Product with id=${id} not found`);
            // error.status = 404;
            // throw error;

            // res.status(404).json({
            //     status: "error",
            //     code: 404,
            //     message: `Product with id=${id} not found`
            // });
            // return;
        }
        res.json(product);
    }
    catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { error } = joiSchema.validate(req.body);
        if (error) {
            throw new BadRequest(error.message);
        }
        const result = await productsOperations.add(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { error } = joiSchema.validate(req.body);
        if (error) {
            throw new BadRequest(error.message);
        }
        const { id } = req.params;
        const result = await productsOperations.updateById(id, req.body);
        if (!result) {
            throw new NotFound(`Product with id=${id} not found`);
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch (error) {
        next(error);
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await productsOperations.removeById(id);
        if (!result) {
            throw new NotFound(`Product with id=${id} not found`);
        }
        res.json({
            status: "success",
            code: 200,
            message: "Success delete"
        });
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;