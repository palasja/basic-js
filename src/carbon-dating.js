const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    arguments.length != 1 ||
    typeof sampleActivity != "string" ||
    sampleActivity.trim().length == 0 ||
    isNaN(Number(sampleActivity)) ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY
  )
    return false;
  const act = Number(sampleActivity);
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / act) / (Math.LN2 / HALF_LIFE_PERIOD)
  );
}

module.exports = {
  dateSample,
};
