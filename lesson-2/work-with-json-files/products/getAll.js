// const fs = require("fs/promises");
// const path = require("path");
// // console.log(__dirname);

// const productsPath = path.join(__dirname, "products.json");

// const getAll = async() => {
//     const data = await fs.readFile(productsPath);
//     const products = JSON.parse(data);
//     return products;
// };

// module.exports = getAll;

const products = require("./products.json");

const getAll = async() => products;

module.exports = getAll;