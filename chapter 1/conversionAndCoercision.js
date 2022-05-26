const inputAge = "20";
console.log(Number(inputAge) + 20);
console.log("23" - "10");

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));

const money = 1;
if (money) {
  console.log("You can spend the money.");
} else {
  console.log("You need to get the job.");
}
const no = prompt("Enter a number");
if (Number(no) === 12) {
  console.log("Congrats your guess is correct!!");
} else {
  console.log("Better guess a next number");
}
