const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function division(n) {
    if(n === 1) {
        return 0;
    }
    if(n % 2 === 0) {
        return  division(n / 2) + 1;
    } else {
        return division(parseInt(n / 3)) + 1;
    }
}

console.log(division(n));