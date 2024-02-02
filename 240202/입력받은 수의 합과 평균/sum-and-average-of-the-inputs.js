const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number);
let sum = 0;

for (let i=1; i<=input[0]; i++) {
    sum += input[i];
}

console.log(sum,(sum/input[0]).toFixed(1));