let names = ['nabaraj', 'dahal', 'nishan'];
console.log(names);
const [a, , c] = names;
console.log(a, c);
let obj = {
  fname: 'Nabaraj',
  lname: 'Dahal',
  age: 26,
  friends: ['Nita', 'Geeta', 'Rita', 'Sabina'],
  info: function ({ name1, friend1 }) {
    return `${name1} best friend is ${friend1}`;
  },
};
let name1 = {
  name1: 'Tripati',
  friend1: 'Sapkota',
};
console.log(obj.info(name1));

//SPREAD OPERATOR
let arr1 = [1, 2, 3];
console.log(...arr1);
let arr2 = [4, 5, 6];
console.log(...arr2);
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
console.log(...mergedArray);
//Copying of Arrays and Objects
const arr3 = [...arr1];
console.log(arr3);
arr3.push(9);
console.log(arr3);
console.log(arr1);

let pokhara = {
  name2: 'Annapurna',
  distance: 123,
  price: 890,
  places: ['Sarankot', 'Dhaulagiri'],
};
console.log(pokhara);
let cpyPokhara = { ...pokhara };
console.log(cpyPokhara);
cpyPokhara.mount = 'Everest';
console.log(cpyPokhara);
console.log(pokhara);
pokhara.places = 'fewa';
console.log(cpyPokhara);
console.log(pokhara);
