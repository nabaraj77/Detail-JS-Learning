let naba = {
  name: "Nabaraj",
  age: 12,
};
let nabaCopy = Object.assign({}, naba);
nabaCopy.age = 13;
console.log(naba);
console.log(nabaCopy);

let arr = ["1", "2", "3"];
console.log(arr);
let [a, b, c] = arr;
console.log(a);
