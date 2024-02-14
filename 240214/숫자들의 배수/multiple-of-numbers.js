const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let newArr = [];
let str = '';
let i = 1;

while (newArr.length < 2) {
    str += (n * i) + ' ';

    if ((n * i) % 5 === 0) {
        newArr.push(n * i);
    }

    i++;
}

console.log(str);