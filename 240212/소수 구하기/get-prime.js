const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let sum = 0;
let str = '';

for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let j = 1; j <= n; j++) {
        if (i % j === 0) {
            sum ++;
        }
    }
    if (sum === 2) {
        str += i + ' ';        
    }
}

console.log(str);