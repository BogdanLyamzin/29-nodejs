const fs = require("fs/promises");
const path = require("path");

const productsPath = path.join(__dirname, "products.json");

const updateProducts = async(products) => {
    await fs.writeFile(productsPath, JSON.stringify(products));
};

module.exports = updateProducts;