const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {v4} = require("uuid");

const app = express();
app.use(cors());
app.use(express.static("public"));

const {PORT = 3000} = process.env;

const tempDir = path.join(__dirname, "temp");

const uploadConfig = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 2048
    }
});

const upload = multer({
    storage: uploadConfig
});

const products = [];

app.get("/api/products", (req, res)=> {
    res.json(
        products
    )
})

app.post("/api/products", upload.single("image"), async(req, res, next)=> {
    /*
    1. Перенести файл image в папку public/products
    2. Записать путь к файлу и имя товара в базу данных.
    3. Вернуть ответ.
    */
   const {path: tempDir, originalname} = req.file;
    const id = v4();
    const [extension] = originalname.split(".").reverse();

    const filename = `${id}_main-image.${extension}`;
    const uploadDir = path.join(__dirname, "public\\products", filename);
    try {
        await fs.rename(tempDir, uploadDir);
        const image = path.join("products", filename);
        const newProduct = {...req.body, id, image};
        products.push(newProduct);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result: newProduct
            }
        })
    } catch (error) {
        await fs.unlink(tempDir)
        next(error)
    }
})

app.listen(PORT);