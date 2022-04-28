const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let newArr = domains.map(str => str.split('.'));
  let obj = {};
  newArr.forEach((arr) => {
    let tmpStr = "";
    arr = arr.reverse();
    arr.forEach((val) => {
      tmpStr += `.${val}`;
      if(tmpStr in obj) {
        obj[tmpStr] = obj[tmpStr]+1;
      } else {
        obj[tmpStr] = 1;
      }
    })
  })
  return obj;
}

module.exports = {
  getDNSStats
};
