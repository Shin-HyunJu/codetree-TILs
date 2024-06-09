const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split('\n');

let n = 0;

// 우측으로 한 칸씩 밀기.. 
// 문자열 길이만큼 돌았을때도 같은게 없으면,, -1 반환
for (let i=0; i<b.length; i++) {
    b = b.slice(1) + b[0];
    if (a === b) {
        console.log(i+1);
        break;
    }

    if (i === b.length-1) {
        console.log(-1);
    }
}