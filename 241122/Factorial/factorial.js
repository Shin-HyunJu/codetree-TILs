const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function factorial(n) {
    if (n === 0) return 1;

    return factorial(n - 1) * n; 
}

console.log(factorial(n));