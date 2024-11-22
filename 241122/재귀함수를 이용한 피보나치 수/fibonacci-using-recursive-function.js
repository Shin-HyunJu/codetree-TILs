const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(n));

// 0 1 2 3 4 5 6 7 8
// 0 1 1 2 3 5 8 13 21