/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //Solution 1
  for (let i = digits.length - 1; i >= 0; i++) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  console.log(digits);
  //Solution 2
  //console.log((Number(digits.join("")) + 1).toString().split("").map(Number));
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
