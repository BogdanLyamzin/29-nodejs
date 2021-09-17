const productsOperations = require("./products");

/*
1. Считать все товары.
2. Считать один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

const id = "767580d5-f509-4f45-98f9-28e74ec4af66";
const delId = "5a280847-4082-4186-b94f-2e293bb4e213";

const newData = {
    name: "iPhone X",
    price: 17000,
    location: "Apple store"
};

(async()=>{
    try {
        // const products = await productsOperations.getAll();
        // console.log(products[0]);
        const oneProduct = await productsOperations.getById(id);
        if(!oneProduct){
            throw new Error(`Товар с id=${id} не найден`);
        }
        // console.log(oneProduct);
        // const newProduct = await productsOperations.add(newData);
        // console.log(newProduct);
        // const updateProduct = await productsOperations.updateById(id, {...oneProduct, price: 5});
        // if(!updateProduct){
        //     throw new Error(`Товар с id=${id} не найден`);
        // }
        // console.log(updateProduct);
        const result = await productsOperations.removeById(delId);
        if(!result){
            throw new Error(`Товар с id=${delId} не найден`);
        }
        console.log("Удаление прошло успешно");
    } 
    catch (error) {
        console.log(error.message);
    }
})();