const fs = require("fs");
let n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

for (let i=1; i<=100; i++) {
    n /= i;
    if(n<=1){
        console.log(i);
        break;
    }
}