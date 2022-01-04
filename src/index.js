module.exports = function reverse(n) {
  let nPositive = "" + Math.abs(n);
  return nPositive.split("").reverse().join("");
}
