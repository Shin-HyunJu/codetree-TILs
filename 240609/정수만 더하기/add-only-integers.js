const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let sum = 0;
for(let elem of input) {
    if (elem >= '0' && elem <= '9') {
        sum += Number(elem);
    }
}

console.log(sum)