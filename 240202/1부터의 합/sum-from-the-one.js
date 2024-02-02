const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

let sum = 0;

for (let i=1; i<=5000; i++) {
    if (sum >= n) {
        console.log(i-1);
        break;
    }
    sum += i;
}