const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n');
let sum = 0;
let cnt = 0;

for (let i = 1; i <= arr[0]; i++) {
    let scoreArr = arr[i].trim().split(' ').map(Number);
    sum = 0;
    for (let score of scoreArr) {
        sum += score;
    }
    if (sum/4 >= 60) {
        console.log('pass');
        cnt++;
    } else {
        console.log('fail');
    } 
}

console.log(cnt);