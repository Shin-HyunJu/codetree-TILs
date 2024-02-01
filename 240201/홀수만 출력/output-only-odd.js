const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);
let result="";

for (let i=a; i<=b; i++) {
    result += (i%2!==0 ? i+' ':'');
}

console.log(result);