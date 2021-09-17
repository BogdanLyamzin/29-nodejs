const {program} = require("commander");

const productsOperations = require("./products");

program
    .option("-a, --action <type>", "action type")
    .option("-i, --id <type>", "product id")
    .option("--name <type>", "product name")
    .option("--price <type>", "product price")
    .option("--location <type>", "product location")
    .option("--update", "test update");

program.parse(process.argv);

const options = program.opts();
// console.log(options);
(async()=> {
    const {action, id, name, price, location} = options;
    switch(action) {
        case "showAll":
            const products = await productsOperations.getAll();
            console.log(products);
            break;
        case "showById":
            const product = await productsOperations.getById(id);
            if(!product){
                console.log(`Товар с id=${id} не найден`);
                break;
            }
            console.log(product);
            break;
        case "add":
            if(!name || !price || !location){
                console.log("Для товара нужно указать name, price и location");
                break;
            }
            const newProduct = await productsOperations.add({name, price, location});
            console.log(newProduct);
            break;
        default:
            console.log("неизвестная команда");
    }
})()