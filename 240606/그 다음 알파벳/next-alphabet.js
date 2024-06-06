const fs = require("fs");
const a = fs.readFileSync(0).toString().trim();

// 97 122

let aNum = a.charCodeAt(0);
console.log((a === 'z') ? 'a' : String.fromCharCode(aNum+1));