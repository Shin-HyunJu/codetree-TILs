const fs = require('fs');
let [num1, num2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 최소공배수 = 최소공약수 x 큰 값?
function lcd(n, m) {
    let max = 1;
    for (let i=1; i<=Math.min(n,m); i++) {
        if (n % i === 0 && m % i === 0) {
            max = i;
        }
    }
    console.log(n*m/max);
}

lcd(num1, num2);