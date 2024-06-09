const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let sum = 0;

for (let elem of input) {
    let tempNum = '';
    for (let val of elem) {
        if (val >= '0' && val <= '9') {
            tempNum += val;
        }
    }
    sum += Number(tempNum);
}

console.log(sum);