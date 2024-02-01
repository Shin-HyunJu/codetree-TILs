const fs = require("fs");
const [a,b] = fs.readFileSync(0).toString().split(" ").map(Number);

let result = (a/b);
let length = result.toString().length;

for(let i=length; i<=21; i++){
    result += '0';
}

console.log(result);