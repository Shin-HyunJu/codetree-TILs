const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let is_prime = true;
let str = '';

for (let i = 2; i <= n; i++) {
    is_prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) is_prime = false;
    }
    if (is_prime) {
        str += i + ' ';        
    }
}

console.log(str);