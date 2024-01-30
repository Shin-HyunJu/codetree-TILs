const fs = require("fs");

let [list] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer1, answer2;

if(list[0] === Math.min(list)) {
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