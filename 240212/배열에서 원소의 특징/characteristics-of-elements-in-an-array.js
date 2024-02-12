const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let index = 0;

for (let i = 0; i < 10; i++) {
    if (input[i] % 3 === 0) {
        index = i;
        break;
    }
}

console.log(input[index-1]);