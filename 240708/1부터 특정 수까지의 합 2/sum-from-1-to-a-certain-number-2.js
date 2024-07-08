const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function sum(n) {
    if (n === 1) {
        return 1;
    }

    return sum(n-1) + n;
}

console.log(sum(n));