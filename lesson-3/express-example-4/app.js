const express = require("express");
const cors = require("cors");
const {v4} = require("uuid");
const products = require("./products");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/products", (req, res)=>{
    res.json(products);
});

app.get("/api/v2/products", (req, res)=>{
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
});

app.post("/api/v1/products", (req, res)=> {
    const newProduct = {...req.body, id: v4()};
    products.push(newProduct);
    res.status(201).json(newProduct)
    // res.json({
    //     message: "Add product success"
    // })
});

app.get("/api/v1/products/:id", (req, res)=> {
    res.json(products[0])
});

app.use((req, res)=>{
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.listen(3000);