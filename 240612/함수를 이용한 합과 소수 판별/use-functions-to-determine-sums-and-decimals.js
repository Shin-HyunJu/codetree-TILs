const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let count = 0;

function isSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    return sum % 2 === 0;
}

function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return true;
}

for (let i = a; i <= b; i++) {
    if (isSum(i) && isPrime(i)) {
        count++;
    }
}

console.log(count);