const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let countArr = Array(10).fill(0);

for (let i = 0; i < arr.length; i++) {
    countArr[parseInt(arr[i]/10)]++;
}

for (let i = 1; i < 10; i++) {
    console.log(`${i} - ${countArr[i]}`)
}