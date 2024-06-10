const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = 0;

for (let i = a; i <= b; i++) {
    if (a !== 1 && b !== 1 && isPrime(i)) {
        sum += i;
    }
}

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(sum);