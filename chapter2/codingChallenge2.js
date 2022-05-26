const calTip = (billValue) => {
  if (billValue > 50 && billValue < 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};
console.log(calTip(300));
const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
console.log(tips);

const totalBill = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totalBill);
