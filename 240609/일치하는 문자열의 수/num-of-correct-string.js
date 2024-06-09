const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0].split(' ')[0]);
let a = input[0].split(' ')[1];

let count = 0;

for (let i=1; i<=n; i++) {
    if (input[i] === a) {
        count++;
    }
}

console.log(count);