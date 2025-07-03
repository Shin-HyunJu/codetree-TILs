const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);
let digit = [];

// Please Write your code here.
while(true) {
    if(n < b) {
        digit.push(n);
        break; 
    }

    digit.push(n % b);
    n = Math.floor(n / b);
}

console.log(digit.reverse().join(''));