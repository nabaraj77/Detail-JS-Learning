function logger() {
  console.log("Logger functiin activated");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges `;
  return juice;
}

console.log(fruitProcessor(2, 3));

function calAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
console.log(calAge(2010)); // function declaration

const age2 = function (year) {
  return 2024 - year;
};
console.log(age2(2011));

const age1 = (year) => {
  return 2022 - year;
};
console.log(age1(11));
