const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [str, qCnt] = input[0].split(" ");

for(let i = 1; i <= qCnt; i++) {
    if(input[i] === '1') {
        str = str.slice(1) + str.slice(0,1);
    }else if(input[i] === '2') {
        str = str.slice(-1) + str.slice(0,-1);
    }else {
        str = str.split("").reverse().join(''); 
    }
    console.log(str);
}