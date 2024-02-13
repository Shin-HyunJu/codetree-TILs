const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let arr = [];
arr[0] = a;
arr[1] = b;

let str = a + ' ' + b + ' ';

for (let i = 2; i < 10; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10;
    str += arr[i] + ' ';
}

console.log(str);