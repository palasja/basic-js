const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let first = {};
  let second = {};
  let count = 0;
  s1.split("").forEach((el) => {
    if (!(el in first)) {
      first[el] = 1;
    } else {
      first[el] = first[el] + 1;
    }
  });
  s2.split("").forEach((el) => {
    if (!(el in second)) {
      second[el] = 1;
    } else {
      second[el] = second[el] + 1;
    }
  });
  for (el in first) {
    if (el in second) {
      count = first[el] < second[el] ? count + first[el] : count + second[el];
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
