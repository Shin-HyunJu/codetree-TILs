const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

function certainRangeSum(a1, a2) {
    let sum = 0;
    for (let i = a1; i <= a2; i++ ) {
        sum += arr[i-1];
    }
    return sum;
}

for (let i = 2; i < (2 + m); i++) {
    let [a1, a2] = input[i].split(' ').map(Number);
    console.log(certainRangeSum(a1, a2));
}