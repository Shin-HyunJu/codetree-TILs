const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d = [];

for (elem of input) {
    arr2d.push(elem.split(' ').map(Number));
}

for (let i = 0; i < 3; i++) {
    let str = '';
    for (let j = 0; j < 3; j++) {
        str += arr2d[i][j] * arr2d[i+4][j] + ' ';
    } 
    console.log(str);
}