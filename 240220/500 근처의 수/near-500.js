const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let max_value = Number.MIN_SAFE_INTEGER;
let min_value = Number.MAX_SAFE_INTEGER;

for (elem of input) {
    if (elem < 500 && max_value < elem) {
        max_value = elem;
    } else if (elem > 500 && min_value > elem) {
        min_value = elem;
    }
}

console.log(max_value, min_value);