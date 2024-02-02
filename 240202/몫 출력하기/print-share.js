const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let i = 0;
let j = 0;

while (true) {
    if (input[i]%2===0) {
        console.log(parseInt(input[i]/2));
        j++;
        if (j === 3) break;
    } 
    i++;
}