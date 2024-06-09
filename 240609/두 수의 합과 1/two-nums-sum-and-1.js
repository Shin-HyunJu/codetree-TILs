const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sumString = (a+b).toString();
let count = 0;

for (let elem of sumString) {
    if (elem === '1') {
        count++;
    }
}

console.log(count);