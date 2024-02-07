const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';

for (let i = 0; i < n; i++) {
    answer = '';
    for (let j = 0; j < n; j++) {
        if (j % 2 === 0) {
            answer += `${i+1}`;
        } else {
            answer += `${n-i}`
        }
    }
    console.log(answer);
}