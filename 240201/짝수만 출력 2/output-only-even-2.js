const fs = require("fs");
const [b,a] = fs.readFileSync(0).toString().split(" ").map(Number);
let result="", i=b;

while (i>=a) {
    result += i+" ";
    i -= 2;
}

console.log(result);