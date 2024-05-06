const fs = require("fs");

fs.readFile("a.txt","utf-8", (err, data) => {
    if(err) {
        console.log("Error reading the file ", err);
        return
    }

    const trimmedData = data.split(" ").filter(word => word !== "").join(' ');

    fs.writeFile("a.txt",trimmedData,"utf8",(err) => {
        console.log("Error reading the file ", err);
        return
    })
    
})

