const fs = require("fs");
let inputList = fs.readFileSync(0).toString().split("\n").map(Number);

for(let i=1; i<inputList[0]; i++) {
    if ((inputList[i]%3 === 0) && (inputList[i]%2 !== 0)) {
        console.log(inputList[i]);
    }
}