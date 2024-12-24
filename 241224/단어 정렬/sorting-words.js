const fs = require("fs");
let list = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(list[0]); 
list = list.splice(1)

console.log(list.sort().join('\n'));

