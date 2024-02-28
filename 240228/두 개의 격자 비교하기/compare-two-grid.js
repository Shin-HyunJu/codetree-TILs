const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

let inputArr = [];

for (elem of input) {
    inputArr.push(elem.split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < m; j++) {
        if (inputArr[i+1][j] !== inputArr[i+n+1][j]) {
            arr2d[i][j] = 1;
        }
        str += arr2d[i][j] + ' ';
    }
    console.log(str);
}