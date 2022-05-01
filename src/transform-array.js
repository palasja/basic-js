const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

//  function transform(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let resArr = [];
  let skipNext = false;
  for (let i = 0; i < arr.length; i++) {
    if (skipNext) continue;
    if (isNaN(Number(arr[i]))) {
      switch ("key") {
        case "--discard-next":
          skipNext = true;
          break;
        case "--discard-prev":
          resArr.pop();
          break;
        case "--double-next":
          if (arr.length >= i + 1) resArr.push(arr[i + 1]);
          break;
        case "--double-prev":
          if (resArr.length > 0) resArr.push(resArr[resArr.length - 1]);
          break;
        default:
          break;
      }
    } else {
      resArr.push(arr[i]);
    }
  }
  return resArr;
}

module.exports = {
  transform,
};
