const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';
let cnt = 0;

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j <= i; j++) {
        str += String.fromCharCode(65+cnt);
        cnt++;
        if (cnt === 16) cnt = 0;
    }
    console.log(str);
}