const { NotFound } = require("http-errors");

const {Product} = require("../models");

const add = async (req, res) => {
    const result = await Product.create(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
};

// const updateById = async (req, res, next) => {
//     const { id } = req.params;
//     const result = await productsOperations.updateById(id, req.body);
//     if (!result) {
//         throw new NotFound(`Product with id=${id} not found`);
//     }
//     res.json({
//         status: "success",
//         code: 200,
//         data: {
//             result
//         }
//     })
// };

// const removeById = async (req, res, next) => {
//     const { id } = req.params;
//     const result = await productsOperations.removeById(id);
//     if (!result) {
//         throw new NotFound(`Product with id=${id} not found`);
//     }
//     res.json({
//         status: "success",
//         code: 200,
//         message: "Success delete"
//     });
// };

module.exports = {
    // getAll,
    // getById,
    add,
    // updateById,
    // removeById
}