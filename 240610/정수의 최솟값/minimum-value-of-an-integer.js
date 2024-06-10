const fs = require('fs');
let [num1, num2, num3] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function findMin(a, b, c) {
    console.log(Math.min(a,b,c))
}

findMin(num1, num2, num3)