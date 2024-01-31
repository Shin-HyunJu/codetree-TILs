const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [aAge, aGender] = input[0].split(" ");
let [bAge, bGender] = input[1].split(" ");

if ((aGender === 'M' && Number(aAge) >= 19)||(bGender === 'M' && Number(bAge) >= 19)) {
    console.log(1);
} else {
    console.log(0);
}