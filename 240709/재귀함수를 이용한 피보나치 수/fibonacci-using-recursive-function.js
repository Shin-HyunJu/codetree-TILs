const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return f(n-1) + f(n-2);
}

console.log(f(n))