const { NotFound } = require("http-errors");

const productsOperations = require("../../model/products");

const getAll = async (req, res, next) => {
    const products = await productsOperations.getAll();
    res.json({
        status: "success",
        code: 200,
        data: {
            products
        }
    });
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const product = await productsOperations.getById(id);
    if (!product) {
        throw new NotFound(`Product with id=${id} not found`);
    }
    res.json(product);
};

const add = async (req, res, next) => {
    const result = await productsOperations.add(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
};

const updateById = async (req, res, next) => {
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
};

const removeById = async (req, res, next) => {
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
};

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById
}