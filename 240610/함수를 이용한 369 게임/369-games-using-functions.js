const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let count = 0;

function is369Number(n) {
    n = n.toString();
    if((Number(n) % 3) === 0 || n.includes('3') || n.includes('6') || n.includes('9')){
        return true;
    }
}

for(let i=a; i<=b; i++) {
    if(is369Number(i)) {
        count++;
    }
}

console.log(count);