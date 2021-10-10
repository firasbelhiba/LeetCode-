/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  prefix = "";

  if (strs.length === 0) {
    return prefix;
  }

  for (i = 0; i < strs[0].length; i++) {
    c = strs[0][i];
    for (j = 1; j < strs.length; j++) {
      if (strs[j][i] !== c) return prefix;
    }
    prefix = prefix + c;
  }
  return prefix;
};
