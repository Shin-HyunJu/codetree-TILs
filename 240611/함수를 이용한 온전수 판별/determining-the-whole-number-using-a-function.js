const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let count = 0;

function perfectNumber(n) {
    if (n % 2 === 0) {
        return false;
    }

    if (n % 10 === 5) {
        return false;
    }

    if (n % 3 === 0 && n % 9 !==0) {
        return false;
    }

    return true;
}

for (let i = a; i <= b; i++) {
    if (perfectNumber(i)) count++;
}

console.log(count);