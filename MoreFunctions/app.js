'use strict';

let bookings = [];
const arr = function (flightNumber, noOfPassenger, price) {
  const booking = {
    flightNumber,
    noOfPassenger,
    price,
  };
  bookings.push(booking);
  //console.log(booking);
};
console.log(bookings);
arr('A123', 12, 121212);
arr('B12', 12);
