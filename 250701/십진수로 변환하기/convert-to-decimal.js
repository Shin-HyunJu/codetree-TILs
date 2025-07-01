const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('').map(Number);
let disitNum = 0;

// Please Write your code here.
for(i = 0; i < input.length; i++) {
    disitNum += input[i] * 2**(input.length - 1 - i);
}

console.log(disitNum)




