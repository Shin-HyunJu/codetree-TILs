const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split(`\n`);
let cnt = 0;

n = Number(n);
arr = arr.split(' ').map(Number);

for (let i = 0; i < 8; i++) {
    if (arr[i] === 2) cnt++;
    if (cnt === 3) {
        console.log(i+1);
        break;
    }
}