const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let str = '';

for(let elem of input) {
    if('a' <= elem && 'z' >= elem) {
        str += elem.toUpperCase();
    } else if ('A' <= elem && 'Z' >= elem){
        str += elem;
    }
}

console.log(str);