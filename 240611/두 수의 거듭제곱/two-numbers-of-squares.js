const fs = require("fs");
let [num1, num2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function power2Number(a, b) {
    let returnValue = 1;
    for (let i = 0; i < b; i++) {
        returnValue *= a;
    }
    return returnValue;
}

console.log(power2Number(num1, num2));