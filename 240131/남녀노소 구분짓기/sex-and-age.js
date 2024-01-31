const fs = require("fs");
let [gender, age] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if (gender===0) {
    console.log(age>19 ? 'MAN':'BOY');
}else {
    console.log(age>19 ? 'WOMAN':'GIRL');
}