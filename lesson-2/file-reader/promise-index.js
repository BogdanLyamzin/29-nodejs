const fs = require("fs/promises");
// const fs = require("fs").promises;

const readFile = async(filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    }
    catch(error){ 
        console.log(error.message);
        // error.message = "Не удалось прочитать файл"
        // throw error;
    }
};

readFile("files/read2.txt");

// fs.readFile("files/read.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));