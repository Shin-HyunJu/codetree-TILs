const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
n = Number(n);
arr = arr.split(' ').map(Number);

let add_price = 0;

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[j] - arr[i] > add_price) {
            add_price = arr[j] - arr[i];
        }
    }
}

console.log(add_price);