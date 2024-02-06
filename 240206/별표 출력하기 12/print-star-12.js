const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i=0; i<n; i++) {
    str = '';

    if (i % 2 === 0) {
        for (let j=0; j<i+1; j++) {
            if (i === 0) {
                str += '';
            } else {
                str += '  ';
            }
        }
    } else {
        for (let j=0; j<i; j++) {
            str += '  ';
        }
    }

    for (let j=0; j<n; j++) {
        if (j % 2 === 0) {
            if (i === 0) {
                str +='* ';
            } else if (j > i) {
                str += '  '
            }
        } else {
            if (i < j+1) {
                str += '* ';
            } 
        }
    }

    console.log(str);
}