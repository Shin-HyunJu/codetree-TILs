const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = 0;
let cnt = 0;

for (let i = 0; i < 10; i++) {
    if (arr[i] >= 250) {
        break;
    }
    sum += arr[i];
    cnt ++;
}

console.log(sum, (sum/cnt).toFixed(1));