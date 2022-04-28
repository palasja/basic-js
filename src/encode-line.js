const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine( str ) {
  let arr = str.split('');
  let res = "";
  let cur = arr[0];
  let count = 1;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] == cur){
      count++;
      continue;
    } else {
      if(count == 1) {
        res += cur; 
      } else {
        res += `${count}${cur}`;

      }
    }
  }
}

module.exports = {
  encodeLine
};
