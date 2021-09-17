const updatePRoducts = require("./updateProducts");
const getAll = require("./getAll");

const removeById = async(id)=> {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    products.splice(idx, 1);
    // const newProducts = products.filter(item => item.id === id);
    await updatePRoducts(products);
    // await updatePRoducts(newProducts);
    return true;
};

module.exports = removeById;