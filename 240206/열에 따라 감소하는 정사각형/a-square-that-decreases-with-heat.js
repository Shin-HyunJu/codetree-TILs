const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());
let answer = '';

for (let i = 0; i < n; i++) {
    answer = '';
    for (let j = n; j > 0; j--) {
        answer += `${j} `
    }
    console.log(answer);
}