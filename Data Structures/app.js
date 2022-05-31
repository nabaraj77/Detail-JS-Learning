let arr = [];
function add(a, b) {
  return {
    a: arr.push(a),
    b: arr.push(b),
  };
}
const a = arr.push(add(1, 2));
console.log(a);
