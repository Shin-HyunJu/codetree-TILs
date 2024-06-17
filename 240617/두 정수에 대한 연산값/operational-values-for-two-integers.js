const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function operationValue(a, b) {

  if (a > b) {
    a += 25;
    b *= 2;
  } else {
    b += 25;
    a *= 2;
  }

  return [a, b];
}

[a, b] = operationValue(a, b);
console.log(a, b);