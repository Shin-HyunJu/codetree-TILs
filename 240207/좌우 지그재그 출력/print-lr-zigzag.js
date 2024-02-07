const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';

for (let i = 0; i < n; i++) {
    answer = '';

    for (let j = 1; j <= n; j++) {
        if (i % 2 === 0) {
            answer += `${n * i + j} `
        } else {
            answer += `${n * (i+1) - (j-1)} `
        }
    }

    console.log(answer);
}