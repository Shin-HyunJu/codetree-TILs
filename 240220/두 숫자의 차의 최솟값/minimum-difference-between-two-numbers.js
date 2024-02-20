const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
n = Number(n);
arr = arr.split(' ').map(Number);

let value = arr[1] - arr[0];

for (let i = 1; i < n-1; i++) {
    if (value > arr[i+1] - arr[i]) {
        value = arr[i+1] - arr[i];
    }
}

console.log(value);