const oneWord = function (str) {
  return str.replace(/ /, '').toLowerCase();
};
//console.log(oneWord('Nabaraj Dahal'));
const upperWords = function (str) {
  const [first, ...others] = str.split('');
  //console.log(others);
  return first.toUpperCase() + others.join('');
};
console.log(upperWords('nabaraj'));
//CREATING HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
  //console.log(str);
  //console.log(`Transformed str: ${fn(str)}`);
};
//transformer('javaScript is Best', upperWords);

//SELF PRACTICE HIGHER ORDER FUNCTION
//function that takes the string and checks if the passseger has has carried gun or knife.

/*---------------------------------------------*/
const check = function (str) {
  if (str.includes('gun') || str.includes('knife')) {
    return 'You cannot Board';
  } else {
    return 'You can board';
  }
};
// check('I have a gun.');
// check('I am a student');
const board = function (str, fn) {
  //console.log(fn.name);

  if (fn(str) === 'You cannot Board') {
    console.log('You are under arrest');
  } else {
    console.log('Welcome to Australia');
  }
};
board('I have a knife', check);
board('I am a student.', check);
