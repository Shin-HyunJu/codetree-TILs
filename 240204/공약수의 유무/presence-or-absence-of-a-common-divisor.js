const fs = require('fs');
const [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let satisfied = 0;

for (let i=a; i<=b; i++) {
    if ((1920 % i === 0)&&(2880 % i ===0)) {
        satisfied = 1;
        break;
    }
}

if (satisfied) {
    console.log(satisfied);
}else {
    console.log(satisfied);
}