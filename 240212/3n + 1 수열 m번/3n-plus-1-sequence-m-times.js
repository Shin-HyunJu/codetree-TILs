const fs = require('fs');
const n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let count = 0;

for (let i = 1; i <= n[0]; i++) {
    count = 0;
    let num = n[i];
    while (num !== 1) {
        if (num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
        count++;
    }
    console.log(count);
}