const fs = require("fs");
const [a,b] = fs.readFileSync(0).toString().split(" ").map(Number);
let result="", i=a;

while (i<=b) {
    result += i+" ";
    i += 2;
}

console.log(result);