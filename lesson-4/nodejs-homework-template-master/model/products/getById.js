const getAll = require("./getAll");

const getById = async(id) => {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);
    const product = products.find(item => item.id === id);
    if(idx === -1){
        return null;
    }
    // if(!product){
    //     return null;
    // }
    return products[idx];
    // return product;
};

module.exports = getById;