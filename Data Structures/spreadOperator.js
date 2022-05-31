'use strict';
/*let a = [1, 2, 3];
console.log(a);
let b = [7, 8, 9];
console.log(b);
let c = [...a];
console.log(c);
c.push('d');
console.log(c);
console.log(a);*/
// let a = [1, 2, 3];
// let b = [...a];
// console.log(a);
// console.log(b);
// b.push('1');
// console.log(b);
// console.log(a);

let numbers = [1, 2, 3, 4, 5, 6];
function add(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(add(numbers));

let name = {
  name: 'nabaraj',
  caste: 'Dahal',
};
const fname = { ...name };
console.log(fname);
