let a = 0;
if (a) {
  console.log("Number is greater than zero.");
} else {
  console.log("Number is not greater than zero.");
}

//SWITCH STATEMENT
let day = "monday";
switch (day) {
  case "sunday":
    console.log("Today is Sunday.");
    break;
  case "monday":
    console.log("Today is Monday");
    break;
  default:
    console.log("Please enter the valid days.");
}

//Calling Function from another function
let cutPieces = (fruits) => {
  return fruits * 2;
};

let foodProcessor = (apples, oranges) => {
  let cutPiecesApples = cutPieces(apples);
  let cutPiecesOranges = cutPieces(oranges);
  const juice = `Juice of ${cutPiecesApples} apples and ${cutPiecesOranges} oranges`;
  return juice;
};
console.log(foodProcessor(2, 3));

//Arrow function
let lName = (lName) => {
  return lName;
};
let fName = (fName, dahal) => {
  const lname = lName(dahal);
  return fName + " " + lname;
};
console.log(fName("Nabaraj", "Dahal"));
