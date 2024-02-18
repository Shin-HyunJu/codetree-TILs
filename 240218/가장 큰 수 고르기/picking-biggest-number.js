const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const MIN_INT = Number.MIN_SAFE_INTEGER;
let max_val = MIN_INT;

for (elem of input) {
    if(elem > max_val) max_val = elem;
}

console.log(max_val);