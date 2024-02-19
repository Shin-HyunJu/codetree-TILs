const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let min_val = Number.MAX_SAFE_INTEGER;
let max_val = Number.MIN_SAFE_INTEGER;

for (elem of input) {
    if (elem === 999 || elem === -999) break;
    else if (elem < min_val) min_val = elem;
    else if (elem > max_val) max_val = elem;
}

console.log(max_val, min_val);