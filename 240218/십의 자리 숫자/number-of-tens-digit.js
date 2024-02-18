const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let countArr = Array(10).fill(0);
let i = 0;

while(arr[i] !== 0) {
    countArr[parseInt(arr[i]/10)]++;
    i++;
}

for (let i = 1; i < 10; i++) {
    console.log(`${i} - ${countArr[i]}`)
}