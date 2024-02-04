const fs = require('fs');
const [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let satisfied = false;

for(let i=a; i<=b; i++) {
    if (i % c===0) {
        satisfied = true;
        break;
    }
}

if (satisfied) {
    console.log('YES');
} else {
    console.log('NO');
}