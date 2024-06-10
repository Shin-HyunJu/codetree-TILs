const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let count = 0;

function is369Number(n) {
    // n = n.toString();
    // if ((Number(n) % 3) === 0 || n.includes('3') || n.includes('6') || n.includes('9')) {
    //     return true;
    // }

    if (n % 3 === 0) return true;

    while (n > 0) {
        if ( n % 10 === 3 || n % 10 === 6 || n % 10 === 9 ) {
            return true;
        }

        n = parseInt(n / 10);
    }
}

for (let i = a; i <= b; i++) {
    if (is369Number(i)) {
        count++;
    }
}

console.log(count);