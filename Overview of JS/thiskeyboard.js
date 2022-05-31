"use strict";
const jonas = {
  year: 1998,
  calcAge: function () {
    console.log(2222 - this.year);
  },
};
jonas.calcAge();

const naba = {
  year: 2020,
};
naba.calcAge = jonas.calcAge;
console.log(naba);
console.log(jonas);
// const f = jonas.calcAge;
// console.log(f());
