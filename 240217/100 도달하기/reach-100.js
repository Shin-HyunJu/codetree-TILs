const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let arr = [1, n];
let i = 1
let str = '';

while(arr[i] < 100) {
    arr[i+1] = arr[i-1] + arr[i];
    i++;
}

for (elem of arr) {
    str += elem + ' ';
}

console.log(str);