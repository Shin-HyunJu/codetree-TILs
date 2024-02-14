const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');

arr = arr.trim().split(' ').map(Number);

let newArr = [];
let str = '';

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) newArr.push(arr[i]);
}

for (item of newArr) {
    str += item + ' ';
}

console.log(str);