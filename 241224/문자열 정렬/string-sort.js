const fs = require("fs");
let word = fs.readFileSync(0).toString().trim().split('');

console.log(word.sort().join(""));