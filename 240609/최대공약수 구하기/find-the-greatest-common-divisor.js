function calGcd(n, m) {
    let max = Math.min;

    for (let i = 1; i<=n; i++) {
        if (n % i === 0 && m % i === 0) {
            max = i;
        }
    }

    console.log(max);
}

const fs = require('fs');
let [num1, num2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

calGcd(num1, num2);