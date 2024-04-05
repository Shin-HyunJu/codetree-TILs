const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < m; i++) {
    input[i+1] = input[i+1].split(' ').map(Number); 
    r = input[i+1][0];
    c = input[i+1][1];
    arr2d[r-1][c-1] = 1;
}

for (let i = 0; i < n; i++) {
    let str ='';
    for (let j = 0; j < n; j++) {
        str += arr2d[i][j] + ' ';
    }    
    console.log(str);
}