const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let count = 0;

function division(n) {
    if(n === 1) {
        console.log(count);
        return;
    }

    if(n % 2 === 0) {
        n = n / 2;
    } else {
        n = parseInt(n / 3);
    }
    count++;
    division(n);
}

division(n);