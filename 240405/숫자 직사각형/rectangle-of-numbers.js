const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d = [];
let sum = 0;

for (elem of input) {
    elem = elem.split(' ').map(Number);
    arr2d.push(elem);
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
        sum += arr2d[i][j];
    }   
}

console.log(sum);

let prac = Array(n).fill(0).map(() => Array(n).fill(0))