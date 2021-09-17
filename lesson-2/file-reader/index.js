const fs = require("fs"); //fs - File System

fs.readFile("files/read.txt", "utf-8", (error, data)=>{
    if(error){
        throw error;
        // return false
    }
    console.log(data);
    // const text = data.toString();
    // console.log(text);
});