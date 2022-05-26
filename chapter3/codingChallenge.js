let temp1 = [17, 21, 23];
const printForecast = function (arr) {
  let print = '';
  for (let i = 0; i < arr.length; i++) {
    print += `...${arr[i]} degree celcius in ${i + 1} day.`;
  }
  return print;
};
console.log(printForecast(temp1));
