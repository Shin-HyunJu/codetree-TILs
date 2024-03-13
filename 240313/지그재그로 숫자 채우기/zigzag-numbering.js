const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let cnt = 0;
let str='';

for (let i=0; i<m; i++) {
    if (i % 2 === 0) {
        for (let j=0; j<n; j++) {
            arr2d[j][i] = cnt;
            cnt++;
        }
    } else {
        for (let j=n-1; j>=0; j--) {
            arr2d[j][i] = cnt;
            cnt++;
        }        
    }
}

for (let i=0; i<n; i++) {
    let str = '';
    for (let j=0; j<m; j++) {
        str += arr2d[i][j] + ' ';
    }    
    console.log(str);
}