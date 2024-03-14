const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));
let cnt = 1;
let str = '';
let flag = true;

for (let i = n - 1; i >= 0; i--) {
    if (flag) {
        for (let j = n - 1; j >= 0; j--) {
            arr2d[j][i] = cnt;
            cnt++;
        }
    } else {
        for (let j = 0; j < n; j++) {
            arr2d[j][i] = cnt;
            cnt++;
        }
    }
    flag = !flag;
}

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        str += arr2d[i][j] + ' ';
    }
    console.log(str);
}