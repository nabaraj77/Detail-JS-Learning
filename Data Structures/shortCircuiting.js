console.log(3 || 'Nabaraj' || true);
console.log(true || 'naba' || 3);
const name = {
  name1: 'naba',
  //   age: 12,
  class: 'job',
};
const check = name.name1 ? name.name1 : 10;
console.log(check);

const check1 = name.age || 'Not Present';
console.log(check1);

console.log(1 && 2 && 3);
