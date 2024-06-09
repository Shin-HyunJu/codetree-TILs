const fs = require('fs');
let [num1, num2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 최소공배수 = 최소공약수 x 큰 값?
function lcd(n, m) {
    let min = 1;
    for (let i=2; i<=Math.min(n,m); i++) {
        if (n % i === 0 && m % i === 0) {
            min = i;
            break;
        }
    }
    console.log(Math.max(n,m)*min);
}

lcd(num1, num2);