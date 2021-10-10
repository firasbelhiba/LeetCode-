/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  counter = {};
  nums.forEach((x) => {
    counter[x] = (counter[x] || 0) + 1;
  });
  keysSorted = Object.keys(counter).sort(function (a, b) {
    return counter[b] - counter[a];
  });

  return keysSorted[0];
};
