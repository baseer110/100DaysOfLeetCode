/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let Num = romanToIntChart(s[i]);

    if (i + 1 < s.length) {
      let nextNum = romanToIntChart(s[i + 1]);

      if (Num >= nextNum) {
        result = result + Num;
      } else {
        result = result + nextNum - Num;
        i++;
      }
    } else result = result + Num;
  }
  return result;
};

function romanToIntChart(r) {
  if (r == "I") return 1;
  if (r == "V") return 5;
  if (r == "X") return 10;
  if (r == "L") return 50;
  if (r == "C") return 100;
  if (r == "D") return 500;
  if (r == "M") return 1000;
  return -1;
}
