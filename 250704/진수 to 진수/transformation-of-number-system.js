const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

// 숫자 input string return
function makeAnother(n) {
    let digitList = [];

    while(true) {
        if(n < b) {
            digitList.push(n);
            return digitList.reverse().join('');
        }

        digitList.push(n%b);
        n = Math.floor(n/b);
    }
}

// string input number return
function makeDigit(digit) {
    let result = 0;

    for(item of digit) {
        result = result * a + Number(item);
    }

    return result;
}

console.log(makeAnother(makeDigit(n)));