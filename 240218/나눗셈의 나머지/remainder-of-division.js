const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let countArr = Array(b).fill(0);
let sum = 0;

while (a > 1) {
    countArr[a % b]++;
    a = parseInt(a / b);
} 

for (let i = 0; i < b; i++) {
    sum += countArr[i] ** 2;
}

console.log(sum);