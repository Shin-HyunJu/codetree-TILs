const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

function calculateMin(hour, min) {
    return hour * 60 + min;
}

const before = calculateMin(a, b);
const after = calculateMin(c, d);

console.log(after - before);


