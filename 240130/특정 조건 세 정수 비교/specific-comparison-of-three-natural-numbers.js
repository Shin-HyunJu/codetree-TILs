const fs = require("fs");

let list = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer1, answer2;

if(list[0] === Math.min(list)) {
    answer1 = 1;
} else {
    answer1 = 0;
}

if(list[0]===list[1] && list[0]===list[2] && list[1]===list[2]) {
    answer2 = 1;
} else {
    answer2 = 0;
}

console.log(answer1,answer2);