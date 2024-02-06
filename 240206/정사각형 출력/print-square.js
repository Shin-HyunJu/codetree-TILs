const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';
let cnt = 1;
for (let i = 1; i <= n; i++) {
    answer = '';
    for (let j = n; j > 0; j--) {
        answer += `${cnt} `
        cnt++;
    }
    console.log(answer);
}