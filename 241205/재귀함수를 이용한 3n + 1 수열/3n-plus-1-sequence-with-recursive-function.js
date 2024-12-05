const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function recursion(n) {
    if (n === 1) return 0;
    else if (n % 2 === 0) {
        return recursion(n / 2) + 1;
    } else{
        return recursion(3 * n + 1) + 1; 
    } 
}

console.log(recursion(n));




