const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
let newArr = Array(10).fill(0);

n = Number(n);
arr = arr.split(' ').map(Number);

for (let i = 0; i < n; i++) {
    newArr[arr[i]]++;
}

for (let i = 1; i < 10; i++) {
    console.log(newArr[i]);
}