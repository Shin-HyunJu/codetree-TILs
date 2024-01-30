const fs = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer1 = a === Math.min(a,b,c) ? 1:0;
let answer2 = (a === b && b === c) ? 1: 0;

console.log(answer1,answer2);