const fs = require("fs");
const a = fs.readFileSync(0).toString().trim();

charNum = a.charCodeAt(0);

console.log(a === 'a' ? 'z' : String.fromCharCode(charNum-1));