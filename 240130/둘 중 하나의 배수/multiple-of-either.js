const fs = require("fs");

let a = Number(fs.readFileSync(0).toString().trim());

console.log(( a%3===0 || a%5===0 )?1:0);