const airplane = "TAP Air Portugal";
const plane = "A320";
console.log(plane.toLowerCase());
console.log(plane.length);
console.log(airplane.indexOf("Ait"));
console.log(airplane.lastIndexOf("a"));
console.log(airplane.includes("TAP"));
console.log(airplane.slice(1, 5));

//coding to check whether the sear is the middle seat or not
const checkMiddleSeat = function (seat) {
  //B AND E are middle seat
  //console.log(seat);
  if (seat.slice(-1) === "A") {
    console.log("Front seat");
  } else if (seat.slice(-1).toUpperCase() === "B") {
    console.log("Middle Seat");
  } else {
    console.log("Last Seat");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("11b");

const passenger = function (name) {
  const mName = name[0].toUpperCase() + name.slice(1, name.length + 1);
  return mName;
};

console.log(passenger("nabaraj"));

//Comparing Email
const email = "hello@gmail.com";
const loginEmail = "hello@gmail.com";
console.log(loginEmail);
let cmp = loginEmail.trim().toLowerCase();
console.log(cmp);
console.log(email);
if (email === cmp) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}
//REPLACING
let a = "123$";
console.log(a.replace("$", "p"));
//console.log(wa);
