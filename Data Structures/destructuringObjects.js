'use strict';
const restaurant = {
  name: 'Rato Bhale',
  location1: 'New Baneshwor 23, Kathmandu',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 23,
    },
    sat: {
      open: 22,
      close: 10,
    },
  },
  orderFinal: function ({ name, address, item, time }) {
    return `Order placed by ${name} of ${address}.Order List are ${this.mainMenu[item]} and should be delivered at ${time}`;
  },
};
// const {
//   openingHours: {
//     fri: { open, close },
//   },
// } = restaurant;
// console.log(open, close);
//console.log(restaurant);
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// let a = 10;
// let b = 20;
// let obj = {
//   a: 11,
//   b: 12,
// };
// ({ a, b } = obj);
// console.log(a, b);
// console.log(openingHours);
// const { fri } = openingHours;
// console.log(fri);
// //const { open, close } = fri;

// //OR
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open);
const obj = {
  name: 'Nabaraj',
  address: 'Buddhanagar',
  item: 1,
  time: 10.3,
};
console.log(restaurant.orderFinal(obj));
