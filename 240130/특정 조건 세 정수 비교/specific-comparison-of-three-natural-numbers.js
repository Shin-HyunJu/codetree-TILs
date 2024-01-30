const fs = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer1, answer2;

if(a === b && a === c) {
    answer1 = 1;
} else {
    answer1 = 0;
}

if(a === b && a === c && b === c) {
    answer2 = 1;
} else {
    answer2 = 0;
}

console.log(answer1,answer2);