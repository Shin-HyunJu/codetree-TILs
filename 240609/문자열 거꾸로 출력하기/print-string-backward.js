const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

for (let i=0; i<input.length-1; i++) {
    input[i] = input[i].split('').reverse().join('');
    console.log(input[i]);
}