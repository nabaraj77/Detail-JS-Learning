// console.log('Nabaraj');
// console.log('Hello NAbaraj');
// console.log('Nabaraj Dahal');

//CHECKING PRIME NUMBER OR NOT
/*const checkPrime = function (no) {
  let count = 0;
  for (i = 1; i < no; i++) {
    if (no % i == 0) {
      count += 1;
    }
  }
  if (count !== 2) {
    console.log(`${no} Prime Number`);
  } else {
    console.log(`${no} is not a Prime Number`);
  }
};
checkPrime(4);

const num = [1, 2, 3, 4, 5, 6, 7];
const sumCalc = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(`Sum is: ${sumCalc(num)}`);*/
const temp = [1, 101, 2, 5, 3, 3, 99, 1];

const max = function (arr) {
  let compare = 0;
  for (i = 0; i <= temp.length; i++) {
    if (temp[i] > compare) {
      let highest = temp[i];
      compare = highest;
    } else {
      highest = compare;
    }
  }
  return highest;
};
console.log(`${max(temp)}`);
const min = function (arr) {
  let compare = highest;
  for (i = 0; i <= temp.length; i++) {
    if (temp[i] < compare) {
      let lowest = temp[i];
      compare = lowest;
    } else {
      lowest = compare;
    }
  }
  return lowest;
};
console.log(`${min(temp)}`);
console.log(`Amplitude is ${highest - lowest}`);
