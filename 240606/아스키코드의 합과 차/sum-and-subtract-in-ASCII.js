const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(' ');

let aNum = A.charCodeAt(0);
let bNum = B.charCodeAt(0);

console.log((aNum + bNum), (aNum > bNum) ? (aNum - bNum):(bNum - aNum));