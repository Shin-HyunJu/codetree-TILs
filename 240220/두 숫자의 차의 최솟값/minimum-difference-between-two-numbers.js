const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
n = Number(n);
arr = arr.split(' ').map(Number);

let value = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
        if (value > Math.abs(arr[i] - arr[j])) {
            value = Math.abs(arr[i] - arr[j]);
        }
    }   
}

console.log(value);