const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().split(" ").map(Number);

if(a>0){
    let result = '';
    for(let i=0; i<b; i++) {
        result += a.toString();
    }
    console.log(result);
} else {
    console.log(0);
}