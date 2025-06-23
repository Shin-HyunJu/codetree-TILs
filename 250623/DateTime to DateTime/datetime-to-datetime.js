const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const monthDate = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateMin(d, h, m) {
    return (d - 1) * 24 * 60 + h * 60 + m;
}

if (calculateMin(A, B, C) - calculateMin(11, 11, 11) > 0) {
    console.log(calculateMin(A, B, C) - calculateMin(11, 11, 11));
} else {
    console.log(-1);
}