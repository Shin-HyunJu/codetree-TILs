const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';
let cnt = 2;

for (let i = 1; i <= n; i++) {
    answer = '';
    for (let j = n; j > 0; j--) {
        answer += `${cnt} `
        cnt+=2;
        if (cnt === 10) {
            cnt = 2;
        }
    }
    console.log(answer);
}