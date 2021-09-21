const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");

const products = require("./products");

const app = express();

// app.use(async(req, res, next)=>{
//     try {
//         const {method, url} = req;
//         const date = moment().format("DD.MM.YYYY_hh:mm:ss");
//         const text = `${method} ${url} ${date}`;
//         await fs.appendFile("server.log", `\n${text}`);
//         next();
//     } 
//     catch (error) {
//         console.log(error.message);
//         next();
//     }
// });

// app.use((req, res, next)=>{
//     console.log("First middlewware");
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("Second middlewware");
//     next();
// });

app.use(cors());

app.get("/products", (req, res)=>{
    res.json(products);
});



app.listen(3000);