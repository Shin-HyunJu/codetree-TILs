const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let count = 0;

function recursion(n) {
    if (n === 1) return 1;
    else if (n % 2 === 0) {
        count++;
        return recursion(n / 2);
    } else{
        count++;
        return recursion(3 * n + 1); 
    } 
}

recursion(n);

console.log(count);




