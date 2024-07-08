const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let count = 0;

function f(n) {
    if (n === 1) {
        return;
    }

    if ((n % 2) === 0) {
        f(n/2); 
    } else {
        f(parseInt(n/3));
    }
    count++;
}

f(n);

console.log(count);