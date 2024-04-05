const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let array2d = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        array2d[i][j] = num;
        num++;
    }    
}

for (let row of array2d) {
    let str = '';
    for (let col of row) {
        str += col + ' ';
    } 
    console.log(str);
}