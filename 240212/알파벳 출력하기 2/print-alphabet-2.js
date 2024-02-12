const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';
let charCode = 65;

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        if (j < i) str += '  ';
        else {
            str += String.fromCharCode(charCode) + ' ';
            charCode++;
            if (charCode === 91) {
                charCode = 65;
            }
        }
    }
    console.log(str);
}