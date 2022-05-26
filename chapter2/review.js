let lName = (lname) => {
  return lname;
};

let fullname = (fname) => {
  const lname = lName("Dahal");
  return fname + " " + lname;
};
console.log(fullname("Nabaraj"));
