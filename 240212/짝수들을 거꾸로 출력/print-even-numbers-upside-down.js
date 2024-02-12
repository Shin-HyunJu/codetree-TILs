const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
let ansArr = [];

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        ansArr.push(arr[i]);
    }
}

console.log(ansArr.reverse().join(' '));