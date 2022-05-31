let names = {
  fname: 'nabaraj',
  lname: 'Dahal',
  friends: {
    name: 'sita',
    caste: 'KC',
  },
};
let properties = Object.keys(names.friends);
console.log(properties);
let str = `We are open on ${properties.length} days: `;
for (items of properties) {
  str += items + ' ';
}
console.log(str);
let arr = [1, 2, 3, 4, 5];
let arr1 = Object.entries(arr);
console.log(arr1);
