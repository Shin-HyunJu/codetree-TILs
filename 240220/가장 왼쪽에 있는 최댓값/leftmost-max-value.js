const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
n = Number(n);
arr = arr.split(' ').map(Number);

let index = n;
let str = '';

while (index !== 0) {
    let max_value = Number.MIN_SAFE_INTEGER;
    let location = 0;
    for (let i = 0; i < index; i++) {
        if (max_value < arr[i]) {
            max_value = arr[i];
            location = i + 1;
        }
    }
    str += location + ' ';
    index = location - 1;
}

console.log(str);