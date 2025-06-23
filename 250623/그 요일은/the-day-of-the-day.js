const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.
const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['-', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function calculate(m, d) {
    let returnVal = d;

    for (let i = 1; i < m; i++) {
        returnVal += month[i];
    }

    return returnVal;
}

const daysIndex = days.indexOf(A);
const diff = calculate(m2, d2) - calculate(m1, d1);

let resultVal = Math.floor(diff / 7);
console.log(diff/7)


console.log(diff % 7, daysIndex)

if (diff % 7 >= daysIndex) {
    resultVal ++;
}

console.log(resultVal);
