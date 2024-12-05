const fs = require("fs");
let [num1, num2, num3] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let multipleNum = num1 * num2 * num3;

function sum(n) {
    if (n < 10) return n;
    return sum(parseInt(n/10)) + n % 10;
}

console.log(sum(multipleNum));