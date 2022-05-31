'use strict';
const restaurant = {
  name: 'Rato Bhale',
  location: 'New Baneshwor 23, Kathmandu',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
console.log(restaurant);

/*const arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a);
console.log(b);*/
let [first, second] = restaurant.categories;
console.log(first, second);
let [a, b, c] = restaurant.categories;
console.log(a, b, c);
[a, b] = [b, a];
console.log(a, b);
//Receives two variables of a function.
const [starter, main] = restaurant.order(1, 2);

let no = [2, 4, [5, 6]];
const [i, , j] = no;
console.log(i, j);
