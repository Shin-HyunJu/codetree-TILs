const fs = require("fs");
const n = Number(fs.readFileSync(0).toString());
let result="", i=3;

while (i<=n) {
    result += i+" ";
    i += 3;
}

console.log(result);