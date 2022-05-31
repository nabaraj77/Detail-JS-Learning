//Rest operator in objects
let names = {
  name: 'Nabaraj',
  age: 22,
  friends: ['a', 'b', 'c'],
};
console.log(names);
const { name, ...others } = names;
console.log(name, others);
