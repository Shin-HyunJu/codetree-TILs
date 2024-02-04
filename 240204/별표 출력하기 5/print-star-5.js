const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i=0; i<n; i++) {
    str = "";
    for (let j=1; j<=(n-i)*(n-i); j++) {
        if (j%(n-i)===0) {
            str += "*"+" ";
        } else {
            str += '*';
        }
    }
    console.log(str);
}