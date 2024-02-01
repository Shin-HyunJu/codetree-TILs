const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let room = 0, hallway = 0, bathroom = 0

for(let i=1; i<=n; i++) {
    if (i % 12 === 0) bathroom++;
    else if (i % 3 === 0) hallway++;
    else if (i % 2 === 0) room++;
}

console.log(room,hallway,bathroom);