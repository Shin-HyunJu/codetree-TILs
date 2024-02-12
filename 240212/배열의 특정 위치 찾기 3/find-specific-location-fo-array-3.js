const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' 0');
input[0] = input[0].trim().split(' ').map(Number);

let sum = 0

for (let i = input[0].length - 1; i >= input[0].length - 3; i--) {
    sum += input[0][i];    
}

console.log(sum);