const fs = require("fs");
let n = Number(fs.readFileSync(0, 'utf-8').toString().trim());
let x = 0

while (n!==1) {
    x++;
    n /= 2;
}

console.log(x);