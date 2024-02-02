const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let i = 0, sum = 0; 

while (true) {
    if (input[i] >= 30) {
        break;
    }
    sum += input[i];
    i++;
}

console.log((sum/i).toFixed(2));