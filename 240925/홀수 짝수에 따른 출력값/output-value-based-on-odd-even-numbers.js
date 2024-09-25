const fs = require("fs");
let max = Number(fs.readFileSync(0).toString().trim());
let sumVal = 0;
let n = 0;

if (max % 2 === 0 ) {
    n = 2;
} else {
    n = 1;
}

function sum(n) {
    if (n > max) {
        return;
    } else {
        sumVal += n;
        n += 2;
        sum(n);
    }
}

sum(n);
console.log(sumVal);