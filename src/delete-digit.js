const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arr = String(n).split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    let tmpArr = arr.filter((val, index) => {if (index != i) return val });
    tmpArr.map(s => Number(s));
    newArr.push(
      tmpArr.join('')
      )
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
