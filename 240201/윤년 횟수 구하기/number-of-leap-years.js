const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let cnt = 0;

for(let i=1; i<=n; i++) {
    if(i%4===0){
        if(i%100 === 0 && i%400 !== 0){

        } else {
            cnt++;
        }
    }
}

console.log(cnt);