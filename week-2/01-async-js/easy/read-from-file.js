const fs = require('fs')

fs.readFile("a.txt","utf-8",(err, data) => {
    console.log(data)
})
let c = 0;
// for(let i = 0; i<10000000000000;i++){
//     c += i
// }
console.log("after for loop")