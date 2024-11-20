const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function squareSum(n) {
    if(n < 10) {
        return n * n;
    }

    return squareSum(parseInt(n/10)) + (n % 10) * (n % 10); 
}

console.log(squareSum(n));



// const fs = require("fs");
// let n = Number(fs.readFileSync(0).toString().trim());