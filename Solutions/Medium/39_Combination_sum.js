/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let results = [];

  somme = (sum, index, array) => {
    if (sum >= target) {
      if (sum === target) {
        results.push(array);
      }
      return true;
    }

    for (let i = index; i < candidates.length; i++) {
      if (somme(sum + candidates[i], i, array.concat(candidates[i]))) {
        break;
      }
    }
    return false;
  };

  somme(0, 0, []);
  console.log("this is the result", results);
};

combinationSum([2, 3, 6, 7], 7);
