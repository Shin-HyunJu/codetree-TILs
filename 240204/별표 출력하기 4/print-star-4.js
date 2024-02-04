const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i=0; i<n; i++) {
    str = "";
    for (let j=0; j<n-i; j++) {
        str += '*' + ' ';
    }
    console.log(str);
}

for (let i=n-2; i>=0; i--) { //3, 2, 1, 0
    str = "";
    for (let j=0; j<n-i; j++) { //
        str += '*' + ' ';
    }
    console.log(str);
}