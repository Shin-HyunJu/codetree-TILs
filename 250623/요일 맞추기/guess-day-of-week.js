const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function calDate(m, d){
    let returnVal = d;

    for (let i = 1; i < m; i++) {
        returnVal += month[i];
    }

    return returnVal;
}

let diff = calDate(m2, d2) - calDate(m1, d1);

console.log(day.at(diff % 7));

