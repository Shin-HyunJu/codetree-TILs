const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));
let cnt = 1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr2d[j][i] = cnt;
        cnt++;
    }   
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        str += arr2d[i][j] + ' ';
    }   
    console.log(str);
}