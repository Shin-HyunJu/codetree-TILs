const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function recurion(n) {
    if( n === 1 || n === 2 ) return n;

    return recurion(parseInt(n / 3)) + recurion(n - 1)
}

console.log(recurion(n));