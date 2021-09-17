const products = require("./products.json");

const getAll = async() => products;

const getById = async(id) => {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);
    const product = products.find(item => item.id === id);
    if(idx === -1){
        return null;
    }
    return products[idx];
};

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById
}