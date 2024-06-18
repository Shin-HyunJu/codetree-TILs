const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let sum = 0;

while (m > 0) {
    // console.log(m)
    sum += arr[m-1];
    m = operation(m);
}

function operation(m) {
    if (m % 2 === 0) {
        m /= 2;
    } else {
        m -= 1;
    }
    return m;
}

console.log(sum);