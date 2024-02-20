const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let diff = 'a'.charCodeAt() - 'A'.charCodeAt();

for (row of input) {
    let str = '';
    row = row.split(' ');
    for (elem of row) {
        let elemCode = elem.charCodeAt() - diff;
        str += `${String.fromCharCode(elemCode)} `;
    }
    console.log(str.trim());
}