const mark = {
  fname: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fname: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
console.log(mark);
console.log(mark.calcBMI());
console.log(john);
console.log(john.calcBMI());
if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.fname} has higher BMI (${mark.calcBMI()})`);
} else {
  console.log(`${john.fname} has higher BMI (${john.calcBMI()})`);
}
