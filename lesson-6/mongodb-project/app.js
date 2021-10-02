const mongoose = require("mongoose");
require("dotenv").config();

const {DB_HOST} = process.env;

const {Schema, model} = mongoose;

const productSchema = Schema({
    name: String,
    price: Number
});
// category => categories
// mouse => mice
const Product = model("product", productSchema);

const newProduct = {
    name: "iPhone X",
    price: 17000,
    description: "Хороший подарок на Новый год"
}

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async ()=>{
    try {
        const result = await Product.create(newProduct);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})
.catch(error => {
    console.log(error.message);
})