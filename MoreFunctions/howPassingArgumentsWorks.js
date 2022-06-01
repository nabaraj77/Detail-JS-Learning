const flight = 'A320';
const name = {
  name: 'Nabaraj Dahal',
  passportNo: 1231231230,
};
const checkIn = function (flight, name1) {
  name1.name = 'Mr. ' + name1.name;
  if (name.passportNo === 1231231230) {
    console.log('You can Board.');
  } else {
    console.log('You cannot Board.');
  }
};
checkIn(flight, name);
