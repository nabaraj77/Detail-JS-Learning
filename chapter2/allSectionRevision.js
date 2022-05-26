("use strict");
//CHALLENGE CODING 1 AND 2
/*const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;
const markHigherBMi = markBmi > johnBmi;
if (markHigherBMi) {
  console.log(`Mark has higher BMI(${markBmi}) than John BMI (${johnBmi})`);
} else {
  console.log(`Mark has higher BMI(${johnBmi}) than John BMI (${markBmi})`);
}*/

//CHALLENGE CODING 3
/*teamDolphin = (10 + 108 + 10) / 3;
teamKoalas = (10 + 108 + 20) / 3;
const minScore = 100;
if (teamDolphin >= minScore || teamKoalas >= minScore) {
  if (teamDolphin > teamKoalas) {
    console.log(`Team Dolphin(${teamDolphin}) is the winner`);
  } else if (teamDolphin < teamKoalas) {
    console.log(`Team Koalas is the winner (${teamKoalas}>(${teamDolphin}))`);
  } else {
    console.log(`Game is draw.(${teamKoalas}) (${teamDolphin})`);
  }
} else {
  console.log(`No one won the game.(${teamKoalas}(${teamDolphin})`);
}*/

//PART 2
//Coding Challenge 1
/*const calAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
avgDolphin = calAverage(0, 0, 0);
avgKoalas = calAverage(0, 0, 0);
console.group(avgDolphin, avgKoalas);
const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin > avgKoalas * 2) {
    console.log(`Team Dolphin is the winner.(${avgDolphin}, (${avgKoalas}))`);
  } else if (avgDolphin === avgKoalas) {
    console.log(`Game is draw. (${avgDolphin}, (${avgKoalas}))`);
  } else {
    console.log(`Team Koalas is the winner.(${avgKoalas}, (${avgDolphin}))`);
  }
};
checkWinner(avgDolphin, avgKoalas);*/

//Coding Challenge 2
/*const calTip = (bill) => {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
console.log(calTip(200));
const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[1])];
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);*/

//Part 3
//Coding Challenge 1
/*let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const markBMI = this.mass / this.height ** 2;
    return markBMI;
  },
};
let john = {
  fullName: "John Smith",
  mass: 79,
  height: 1.69,
  calcBMI: function () {
    const johnBMI = this.mass / this.height ** 2;
    return johnBMI;
  },
};
const markBMI1 = mark.calcBMI();
const johnBMI2 = john.calcBMI();
if (markBMI1 > johnBMI2) {
  console.log(`Mark has Higher BMI (${markBMI1}) (${johnBMI2})`);
} else if (markBMI1 === johnBMI2) {
  console.log("Has equal BMI");
} else {
  console.log(`John has Higher BMI (${johnBMI2}) (${markBMI1})`);
}*/

//Coding Challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 52];
const tips = [];
const total = [];
const calTip = function (money) {
  if (money > 50 && money < 300) {
    return money * 0.15;
  } else {
    return money * 0.2;
  }
};
for (i = 0; i < bills.length; i++) {
  //   tips.push(calTip[i]);
  tips[i] = calTip(bills[i]);
  total[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(total);
const calAverage = function (arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calAverage(bills));
