/**
 * @param {number} x
 * @return {boolean}
 */

function reverseNumber(x) {
  let revNumber = 0;

  while (x > 0) {
    revNumber = revNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return revNumber;
}

var isPalindrome = function (x) {
  let revNum = reverseNumber(x);
  return x === revNum ? true : false;
};
