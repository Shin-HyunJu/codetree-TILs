const fs = require("fs");
const n = Number(fs.readFileSync(0).toString());

function printSum(n) {
    if ( n === 1 ) {
        return 1;
    } else if (n === 2) {
        return 2;
    }

    return printSum(n-2) + n;
}

console.log(printSum(n));