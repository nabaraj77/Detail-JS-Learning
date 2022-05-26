"use strict";
const student = {
  name: "Nabaraj",
  job: "Engineer",
  salary: 20,
  year: 2000,
  fName: {
    firstName: "Naba",
    lName: "Dahal",
  },
  friends: ["a", "b", "c"],
  calAge: function () {
    return 2022 - this.year;
  },
};
console.log(student.calAge());

const employee = {
  eName: "Nabaraj",
  ePost: "Engineer",
  eSalary: 100,
  eFriends: ["Ram", "Nita", "Sita"],
  eAge: function () {
    console.log(this);
    this.age = 300 - this.eSalary;
    return this.age;
  },
  summary: function () {
    return `${this.eName} is ${this.age} or ${this.eAge()} years old`;
  },
};
console.log(employee);
console.log(employee.eAge());
console.log(employee.summary());
console.log(employee.age);
console.log(employee.age);
console.log(employee.age);
console.log(employee.summary());
