let friends = ["a", "b", "c"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
friends.push("d");
console.log(friends);
friends.unshift("z");
console.log(friends);

//exercise
const calAge = (birthYear) => {
  return 2037 - birthYear;
};
const years = [2222, 2011, 1022];
console.log(calAge(years[0]));
