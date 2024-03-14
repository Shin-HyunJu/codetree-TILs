const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let cnt = 1;
let k = 0;

while (k < n) {
    for (let i = 0; i <= k; i++) {
        for (let j = k-i; j >= 0; j--) {
            if (arr2d[i][j] === 0) {
                arr2d[i][j] = cnt;
                cnt++;
            }
        }
    }
    k++;    
}

let l = 1;
while(l < n) {
    for (let i = l; i < n; i++) {
        for (let j = m-l; j >= m-l; j--) { //n-m+l
        // console.log(i,j,l,m)
            if (arr2d[i][j] === 0) {
                arr2d[i][j] = cnt;
                cnt++;
            }
        }
        l++;
    }
}

if(arr2d[n-1][m-1] === 0) {
    arr2d[n-1][m-1] = cnt;
} 


let str = '';
for (let i=0; i<n; i++) {
    str = '';
    for(let j=0; j<n; j++) {
        str += arr2d[i][j] +' ';
    }
    console.log(str);
}