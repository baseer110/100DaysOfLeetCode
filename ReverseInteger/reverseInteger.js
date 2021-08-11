/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const limit = Math.pow(2, 31) - 1;
  let number = Math.abs(x).toString().split("").reverse().join("");

  const k = x < 0 ? -1 : 1;
  let reverseNumber = Number(String(Math.abs(x)).split("").reverse().join(""));
  return reverseNumber > limit ? 0 : reverseNumber * k;
};
