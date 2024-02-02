const fs = require("fs");
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

let cnt = 0;

input.forEach(item => {
    if(item%2===0) {cnt++};
})

console.log(cnt);