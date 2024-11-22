const fs = require("fs");
const n = Number(fs.readFileSync(0).toString());

function printSum(n) {
    // if ( n === 1 ) {
    //     return 1;
    // } else if (n === 2) {
    //     return 2;
    // }

    if (n < 0) {
        return 0;
    } else {
        return printSum(n-2) + n;
    }

}

console.log(printSum(n));
