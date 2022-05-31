const collection = new Set(['a', 'b', 'c', 'a', 'b']);
console.log(collection);

let mathMarks = [1, 2, 3, 4, 5];
let filteredMarks = mathMarks.every(marks);
function marks(no) {
  if (no > 0) {
    return no;
  }
}
console.log(filteredMarks);
