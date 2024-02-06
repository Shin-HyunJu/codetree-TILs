const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i=0; i<n; i++) {
    str = '';

    for (let j=0; j<n; j++) {
        if (j % 2 === 0) {
            if (i === 0) {
                str +='* ';
            } else {
                str += '  '
            }
        } else {
            if (i < j+1) {
                str += '* ';
            } else {
                str += '  ';
            }
        }
    }

    console.log(str);
}