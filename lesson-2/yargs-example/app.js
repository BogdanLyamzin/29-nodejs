const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const productsOperations = require("./products");

// console.log(process.argv);
const arr = hideBin(process.argv);
// console.log(arr)

const {argv} = yargs(arr);
// console.log(argv);

(async()=>{
    const {action, id} = argv;
    switch(action){
        case "showAll":
            const products = await productsOperations.getAll();
            console.log(products);
            break;
        case "showById":
            const product = await productsOperations.getById(id);
            if(!product){
                console.log(`Товар с id=${id} не найден`);
            }
            else {
                console.log(product);
            }
            break;
        default:
            console.log("Неизвестная команда")
    }
})();