/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    var dictionary = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
    let output = [];
  
    const combine = (word, index) => {
      if (index > digits.length - 1) {
        output.push(word);
        return;
      }
      const letters = dictionary[digits[index]];
      for (const letter of letters) {
        combine(word + letter, index + 1);
      }
    };
    combine("", 0);
    return output;
  };
  
  console.log(letterCombinations("23"));