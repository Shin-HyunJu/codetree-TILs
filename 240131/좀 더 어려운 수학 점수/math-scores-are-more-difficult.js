const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [aMath, aEnglish] = input[0].split(" ").map(Number);
let [bMath, bEnglish] = input[1].split(" ").map(Number);

if (aMath === bMath) {
    console.log(aEnglish>bEnglish ? 'A':'B');
} else {
    console.log(aMath>bMath ? 'A':'B');
}