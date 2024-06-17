const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');

n = Number(n);
arr = arr.split(' ').map(Number);

function absoluteVal(arr) {
//   arr.forEach(elem => {
//     elem = Math.abs(elem);
//     console.log(elem)
//   });
//   console.log(arr);
  for(let i = 0; i < n; i++) {
    arr[i] = Math.abs(arr[i]);
  }
}



absoluteVal(arr);

console.log(arr.join(' '));