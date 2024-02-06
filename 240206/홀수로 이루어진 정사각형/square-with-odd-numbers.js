const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';

for (let i = 11; i < 11 + 2 * n; i+=2) {
    answer = '';
    for (let j = i; j < i + 2 * n; j+=2) {
        answer += `${j} `
    }
    console.log(answer);
}