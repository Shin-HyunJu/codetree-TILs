const fs = require("fs");
let [left, right] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if (left >= 1 && right >= 1) {
    console.log("High");
} else if (left >= 0.5 && right >= 0.5) {
    console.log("Middle");
} else {
    console.log("Low");
}