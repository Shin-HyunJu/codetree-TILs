const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const monthDate = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// Please Write your code here.
function calDate(m, d) {
    
    let returnVal = 0;

    for (let i = 1; i < m; i ++) {
        returnVal += monthDate[i];
    }

    returnVal += d;

    return returnVal;
}

console.log(calDate(m2, d2) - calDate(m1,d1) + 1);