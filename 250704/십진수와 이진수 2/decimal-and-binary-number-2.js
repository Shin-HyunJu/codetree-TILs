const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];
let digit = 0;

// Please Write your code here.
function makeBinary(n) {
    let digitlist = [];
    while(true) {
        if(n < 2) {
            digitlist.push(n);
            return Number(digitlist.reverse().join(''));
        }

        digitlist.push(n % 2);
        n = Math.floor(n / 2);
    }
}

function makeDigit(n) {
    let result = 0; 
    for (let letter of n) {
        result = result*2 + Number(letter)
    }
    return result;
}

let makeDigitMultiple17 = makeDigit(binaryInput) * 17;

console.log(makeBinary(makeDigitMultiple17));

