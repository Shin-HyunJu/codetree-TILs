const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = 0;
let average = 0;

// 원소찾기
let x = 0;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= 250) {
        break;
    }

    x = i; 
}

for (let elem of arr.slice(0, x+1)) sum += elem
average = Math.round(sum/(x+1) * 10)/10

console.log(sum, average);

