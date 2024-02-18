const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
const INT_MAX = Number.MAX_SAFE_INTEGER;
let min_value = INT_MAX;

n = Number(n);
arr = arr.split(' ').map(Number);

for (elem of arr) {
    if (elem < min_value) min_value = elem;
}

let  count = 0;
for (elem of arr) {
    if (elem === min_value) count++;
}

console.log(min_value, count);