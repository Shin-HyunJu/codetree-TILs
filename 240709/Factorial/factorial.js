const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n <= 1) {
        return 1;
    }

    return f(n-1) * n;
}

console.log(f(n))