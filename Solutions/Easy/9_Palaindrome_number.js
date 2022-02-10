/**
 * @param {number} x
 * @return {boolean}
 */

// Solution 1
var isPalindrome = function (x) {
  if (x > 0x7fffffff) {
    return fasle;
  }

  result = parseInt(x.toString().split("").reverse().join(""));

  if (result === x) return true;

  return false;
};

// Solution 2
var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  } else if (x < 0 || x % 10 === 0) {
    return false;
  } else {
    reversed = 0;
    while (x > reversed) {
      let pop = x % 10;
      x = Math.trunc(x / 10);
      reversed = reversed * 10 + pop;
    }

    if (x === reversed || x === Math.trunc(reversed / 10)) {
      return true;
    } else {
      return false;
    }
  }
};
