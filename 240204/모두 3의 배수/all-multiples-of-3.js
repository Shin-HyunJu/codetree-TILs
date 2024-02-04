const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let satisfied = 1;

for (i=0; i<5; i++) {
    if (input[i] % 3 !==0) {
        satisfied = 0;
        break;
    }
}

console.log(satisfied);