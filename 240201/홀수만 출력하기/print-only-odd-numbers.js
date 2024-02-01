const fs = require("fs");
let inputList = fs.readFileSync(0).toString().split("\n").map(Number);

inputList.forEach(item =>{
    if ((item%3 === 0) && (item%2 !== 0)) {
        console.log(item);
    }
})