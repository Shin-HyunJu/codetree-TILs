const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let index = input.indexOf('e');

console.log(input.slice(0,index)+input.slice(index+1))