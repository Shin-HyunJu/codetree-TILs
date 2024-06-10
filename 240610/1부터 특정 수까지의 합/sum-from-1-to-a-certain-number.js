const fs = require('fs');
let num = Number(fs.readFileSync(0).toString().trim());

function sumDiv(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }
    console.log(Math.floor(sum/10));
}

sumDiv(num);