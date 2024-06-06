const fs = require("fs");
let array = fs.readFileSync(0).toString().trim().split(' ');
let str = '';

for (elem of array) {
    str += String.fromCharCode(Number(elem)) + ' ';
}

console.log(str);