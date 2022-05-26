const arr = ["Nabaraj", "Dahal", true, 22, "Engineer"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") break;
  console.log(typeof arr[i], arr[i]);
}
