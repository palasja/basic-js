const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let res = "";
  let cur = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length + 1; i++) {
    if (arr[i] == cur) {
      count++;
      continue;
    } else {
      if (count == 1) {
        res += cur;
      } else {
        res += `${count}${cur}`;
      }
      cur = arr[i];
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
