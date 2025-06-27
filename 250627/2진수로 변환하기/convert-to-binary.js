const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let digits = [];

function representingBinary(n) {
    while(true) {
        if (n < 2) {
            digits.push(n);
            console.log(digits.reverse().join(''));
            return;
        }

        digits.push(n % 2);
        n = Math.floor(n / 2);
    }
}

representingBinary(n);