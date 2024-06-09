const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let str = '';

for(let elem of input) {
    if('a'.charCodeAt(0) <= elem.charCodeAt(0) && 'z'.charCodeAt(0) >= elem.charCodeAt(0)) {
        str += elem.toUpperCase();
    } else if ('A'.charCodeAt(0) <= elem.charCodeAt(0) && 'Z'.charCodeAt(0) >= elem.charCodeAt(0)){
        str += elem;
    }
}

console.log(str);