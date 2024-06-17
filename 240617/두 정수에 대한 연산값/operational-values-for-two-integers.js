const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function operationValue(a, b) {
  let min, max = 0;
  min = Math.min(a, b);
  max = Math.max(a, b);

  return [(min * 2), (max +25)];
}

[a, b] = operationValue(a, b);
console.log(a, b);