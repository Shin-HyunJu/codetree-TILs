const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';

for (let i = 1; i <= n; i++) {
    answer = '';
    for (let j = n; j > 0; j--) {
        answer += `${i*j } `
    }
    console.log(answer);
}