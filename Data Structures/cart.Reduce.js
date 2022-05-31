'use strict';
let cart = [
  {
    name: 'Nokia',
    price: 599.99,
    amount: 1,
  },
  {
    name: 'Google Pixel',
    price: 499.99,
    amount: 2,
  },
  {
    name: 'Redmi Note 10 Pro',
    price: 699.99,
    amount: 4,
  },
  {
    name: 'Note 5',
    price: 399.99,
    amount: 3,
  },
];
//console.log(cart);

/*let { totalItems, cartItem } = cart.reduce(
  (total, cartItem) => {
    //console.log(cartItem);
    const { price, amount } = cartItem;
    total.totalItems += amount;
    total.cartItem += price * amount;
    //console.log(price, amount);
    return total;
  },
  {
    totalItems: 0,
    cartItem: 0,
  }
);
console.log(totalItems, Number(parseFloat(cartItem).toFixed(2)));
*/
//TO DISPLAY CART TOTAL AMOUNT AND TOTAL AMOUNT
/*let filteredData = cart.reduce(
  (total, cartItems) => {
    //   console.log(cartItems);
    const { price, amount } = cartItems;
    total.totalItems += amount;
    total.cartTotal += amount * price;
    //   console.log(price, amount);
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
console.log(filteredData);
*/
//console.log(cart);
let { totalItems, totalAmount } = cart.reduce(
  (total, items) => {
    //console.log(items);
    const { price, amount } = items;
    //console.log(price, amount);
    //count
    total.totalItems += amount;
    total.totalAmount += amount * price;
    return total;
  },
  { totalItems: 0, totalAmount: 0 }
);
console.log(`Total Items ordered : ${totalItems}
Toatal Amount : ${Number(totalAmount.toFixed(2))}`);

let forData = cart.forEach((data, index) => {
  console.log(data, index);
});
