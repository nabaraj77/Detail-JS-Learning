for (let i = 1; i <= 10; i++) {
  console.log(i + " " + "Hello Nabaraj");
}
const arr = ["Nabaraj", "Dahal", true, 22, "Engineer"];
let arr1 = [];
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i], typeof arr[i]);
  arr1.push(typeof arr[i]);
}
console.log(arr1);
