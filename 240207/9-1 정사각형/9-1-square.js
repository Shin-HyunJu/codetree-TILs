const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';
let cnt = 9;

for (let i = 0; i < n; i++) {
    answer = '';
    for (let j = 0; j < n; j++) {
        answer += `${cnt}`;
        cnt--;
        if (cnt === 0) cnt = 9;
    }
    console.log(answer);
}