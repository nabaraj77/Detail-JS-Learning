//TO CAPITALIZE THE FIRST LETTER OF FOR FIRSTNAME AND LASTNAME
const capitalize = function (name) {
  const capName = name.split(" ");
  console.log(capName);
  let result = " ";
  let arr = [];
  for (let names of capName) {
    arr.push(names[0].toUpperCase() + names.slice(1));
  }
  console.log(arr.join(" "));
};
capitalize("nabaraj dahal");

//MASKING CREDIT CARD NUMBER
const creditCard = function (number) {
  let str = String(number);
  const lastFourDigits = str.slice(str.length - 4, str.length);
  console.log(lastFourDigits);
  console.log(lastFourDigits.padStart(str.length, "*"));
};
creditCard(1234567890);
//CODING CHALLENGE
const camelCase = function (name) {
  const sName = name.toLowerCase();
  console.log(sName);
  const splittedNames = sName.split("_");
  let arrSplitted = [];
  for (let [index, item] of splittedNames.entries()) {
    if (index === 0) {
      arrSplitted.push(item);
    } else {
      arrSplitted.push(
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
      );
    }
  }
  console.log(arrSplitted.join(""));
};
camelCase("str_name");
camelCase("EVEREST_collEGE_saNEpA");
