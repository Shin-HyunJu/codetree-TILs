const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = 0;
let str = '';

// 0 전 까지 for문 돌리
for (let i=0; i<input.length-1; i++) {
    cnt++;
    if (i%2 === 0) {
        str += input[i] + '\n';
    }
}

console.log(cnt);
console.log(str);