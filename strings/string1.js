let str = "Nabaraj";
let strArray = str.split("");
let newArray = [];
console.log(strArray);
for (const [index, value] of strArray.entries()) {
  //console.log(value);
  if (value != "a") {
    newArray.push(value);
  }
}
console.log(newArray.join(""));

console.log(str.replace(/a/g, ""));

let baggage = function (string) {
  let checkString = string.toLowerCase();
  if (checkString.includes("knife") || checkString.includes("gun")) {
    console.log("You are not going to board.");
  } else {
    console.log("You can Board");
  }
};
baggage("I am going to Australia and i have gun and a knife");
baggage("I am a student");
baggage("I have a knife");
