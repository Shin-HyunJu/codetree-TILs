const fs = require("fs");
let y = Number(fs.readFileSync(0).toString().trim());

if (y<=7) {
    if (y%2===0) console.log(y===2? 28:30);
    else console.log(31);
}else {
    if (y%2===0) console.log(31);
    else console.log(30);
}