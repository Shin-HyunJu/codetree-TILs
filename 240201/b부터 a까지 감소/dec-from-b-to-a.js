const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);
let result="";

for(let i=b; i>=a; i--) {
    result += i+" ";
}

console.log(result);