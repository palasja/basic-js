const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   }
// }
class DepthCalculator {
  count = 1;
  cur = 1;
  calculateDepth(arr) {
    let cur = 1;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        cur++;
        if (cur > this.count) this.count = cur;
        this.calculateDepth(el);
      }
    });
    return this.count;
  }
}

module.exports = {
  DepthCalculator,
};
