const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

let calTip = function (money) {
  if (money > 50 && money < 300) {
    return money * 0.15;
  } else {
    return money * 0.2;
  }
};
for (let i = 0; i < bills.length; i++) {
  tips[i] = calTip(bills[i]);
  total[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(total);

let average = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(average(tips));
