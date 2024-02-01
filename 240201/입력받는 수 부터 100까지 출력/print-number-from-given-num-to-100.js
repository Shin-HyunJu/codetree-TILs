const fs = require("fs");
const input = Number(fs.readFileSync(0).toString());

let result = '';

for(let a=input; a<=100; a++) {
    result += a + " ";
}

console.log(result);