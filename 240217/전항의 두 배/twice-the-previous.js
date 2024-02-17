const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let str = '';

for(let i = 0; i < 10; i++) {
    if (i < 8) {
        arr[i+2] = arr[i+1] + 2 * arr[i];
    } 
    str += arr[i] + ' ';
}

console.log(str);