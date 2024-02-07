const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';
let cnt = 1;

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
         if (i > j) {
            str += '  ';
         } else {
            str += cnt + ' ';
            cnt++;
            if (cnt === 10) cnt = 1;
         } 
    }
    console.log(str);
}