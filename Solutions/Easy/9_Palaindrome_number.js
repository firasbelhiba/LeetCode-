/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x > 0x7fffffff) {
    return fasle;
  }

  result = parseInt(x.toString().split("").reverse().join(""));

  if (result === x) return true;

  return false;
};
