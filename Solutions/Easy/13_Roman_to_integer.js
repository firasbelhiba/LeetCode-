/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let numericNumber = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) numericNumber += currentInt;
      else {
        numericNumber += nextInt - currentInt;
        i++;
      }
    } else {
      numericNumber += currentInt;
    }
  }

  return numericNumber;
};
