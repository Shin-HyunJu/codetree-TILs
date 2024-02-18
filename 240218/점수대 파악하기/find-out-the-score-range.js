const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let countArr = Array(11).fill(0);
let i = 0;

while(arr[i] !== 0) {
    countArr[parseInt(arr[i]/10)]++;
    i++;
}

for (let i = 10; i > 0; i--) {
    console.log(`${i*10} - ${countArr[i]}`)
}