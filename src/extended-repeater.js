const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = checkStr(str);
  let addition = "addition" in options ? checkStr(options.addition) : undefined;
  let repeatTimes = "repeatTimes" in options ? options.repeatTimes : 1;
  let additionRepeatTimes =
    "additionRepeatTimes" in options ? options.additionRepeatTimes : 1;
  let res = "";
  let separator = "separator" in options ? options.separator : "+";
  let additionSeparator =
    "additionSeparator" in options ? options.additionSeparator : "|";
  let tmpstr = "";
  for (let i = 0; i < repeatTimes; i++) {
    tmpstr += str;
    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        tmpstr += addition;
        if (j != additionRepeatTimes - 1) tmpstr += additionSeparator;
      }
    }

    if (i != repeatTimes - 1) tmpstr += separator;
  }
  return tmpstr;
}
function checkStr(str) {
  if (typeof str !== "string") return String(str);
  return str;
}

module.exports = {
  repeater,
};
