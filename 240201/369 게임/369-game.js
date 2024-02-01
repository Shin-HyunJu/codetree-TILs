const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let result ='';

for(let i=1; i<=n; i++){
    let stirngI = i.toString();
    if(i%3===0 || stirngI.includes('3') || stirngI.includes('6') || stirngI.includes('9')){
        result += '0 ';
    }else{
        result += i + " ";
    }
}

console.log(result);