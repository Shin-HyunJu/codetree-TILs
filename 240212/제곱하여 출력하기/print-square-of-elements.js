const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let str = '';

input[1] = input[1].trim().split(' ').map(i => Number(i)**2);

for (elem of input[1]) {
    str += elem + ' ';
}

console.log(str);