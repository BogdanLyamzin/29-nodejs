const fs = require("fs/promises");

const fileOperation = async(filePath, type = "read", data = "") => {
    switch(type){
        case "read":
            return await fs.readFile(filePath, "utf-8");
        case "add":
            return await fs.appendFile(filePath, data);
        case "rewrite":
            return await fs.writeFile(filePath, data);
    }
};

const file = "files/read.txt";
const file2 = "files/read2.txt";
const file3 = "files/read3.txt";
// const request1 = fileOperation(file);
// request1
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));

// fs.appendFile("files/file.txt", "");

(async()=> {
    try {
        // const result = await fileOperation(file);
        // console.log(result);
        // const result = await fileOperation(file, "add", "И ни с кем им не делится");
        // console.log(result);
        // await fileOperation(file, "add", " И ни с кем им не делится");
        // console.log("Запись успешно добавлена в файл");
        // await fileOperation(file, "rewrite", "Винни-Пух и Пятак");
        // console.log("Файл успешно пререзаписан");
        // await fileOperation(file2, "add", " И ни с кем им не делится");
        // console.log("Запись успешно добавлена в файл");
        // await fileOperation(file3, "rewrite", "Винни-Пух и Пятак");
        // console.log("Файл успешно пререзаписан");
    }
    catch(error){
        console.log(error.message);
    }
})();

// fs.rename("files/read.txt", "files/read.log");

// if(true){
//     var name = "Жан-Поль Василь";
//     console.log(name);
// }
// console.log(name);

// (function(){
//     // console.log("Самовызывающася функция");
//     var name = "Регент";
//     console.log(name);
// })();
// console.log(name);

