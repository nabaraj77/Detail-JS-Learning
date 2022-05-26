let student = {
  name: "Nabaraj",
  age: 22,
  job: "Engineer",
  salary: 20,
  fName: {
    firstName: "Naba",
    lName: "Dahal",
  },
  friends: ["a", "b", "c"],
};
// console.log(student.fName.lName);
console.log(student.friends.length);
// const interestedIn = prompt(
//   "What do You want to know about student. Select between name, age, job, salary"
// );
// if (student[interestedIn]) {
//   console.log(student[interestedIn]);
// } else {
//   console.log("Enter a valid response.");
// }
let friend = `${student.friends[0]} has ${
  student.friends.length
} friends and his best friend is ${
  student.friends[student.friends.length - 1]
}`;
console.log(friend);
