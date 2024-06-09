const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let sum = 0;

for (let i=1; i<=input[0]; i++){
    sum += input[i];
}

sum = sum.toString();

console.log(sum.slice(1) + sum.slice(0, 1));