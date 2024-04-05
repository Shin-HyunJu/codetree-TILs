const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let array2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    array2d[i][0] = 1;
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        array2d[i][j] = array2d[i-1][j-1] + array2d[i-1][j];
    }    
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += array2d[i][j] + ' ';
    }
    console.log(str)    
}