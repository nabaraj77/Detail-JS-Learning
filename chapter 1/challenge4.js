const bill = 400;
const tips = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`Tips is ${tips} and Total Amount = ${bill + tips}`);
