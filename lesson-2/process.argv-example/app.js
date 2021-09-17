const productsOperations = require("./products");

(async()=>{
    const actionIdx = process.argv.indexOf("--action");
    if(actionIdx !== -1) {
        const action = process.argv[actionIdx + 1];
        switch(action){
            case "showAll":
                const products = await productsOperations.getAll();
                console.log(products);
                break;
        }
    }
})()

