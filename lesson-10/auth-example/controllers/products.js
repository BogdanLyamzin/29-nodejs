const { NotFound } = require("http-errors");

const {Product} = require("../models");

const getAll = async(req, res)=> {
    const result = await Product.find({}, "_id name price active status code");
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

const getById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findById(id, "_id name price active status code");
    // const result = await Product.findOne({_id: id});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
    status: "success",
    code: 200,
    data: {
        result
        }
    });
}

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

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body, {new: true});
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

const updateActive = async (req, res) => {
    const { id } = req.params;
    const {active} = req.body;
    const result = await Product.findByIdAndUpdate(id, {active}, {new: true});
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

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);
    console.log(result);
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
    updateActive,
    removeById
}