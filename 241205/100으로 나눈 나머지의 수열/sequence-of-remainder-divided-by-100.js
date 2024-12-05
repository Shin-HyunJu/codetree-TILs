const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function recursion(n) {
    if (n === 1) return 2;
    if (n === 2) return 4;
    return recursion(n - 1) * recursion(n - 2) % 100; 
}

console.log(recursion(n));