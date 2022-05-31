//map
let family = [
  { name: 'Jack', items: 26, price: 22 },
  { name: 'Jill', items: 26, price: 22 },
  { name: 'James', items: 26, price: 22 },
  { name: 'Jenny', items: 26, price: 22 },
];
let data = family.reduce(
  (total, cartItem) => {
    const { items, price } = cartItem;
    console.log(items);
    console.log(price);
    return total;
  },
  {},
  { total: 0, items: 0 }
);
// console.log(data);
