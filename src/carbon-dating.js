import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_OF_TWO = 0.693;

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
export default function dateSample(sampleActivity) {
  let result = 0;
  let sampleActivityNumber = Number(sampleActivity);

  if (sampleActivity === undefined || typeof sampleActivity !== "string" || sampleActivity.length <= 0 || sampleActivityNumber < 1 || sampleActivityNumber >= 15) {
    return false;
  }

  if (isNaN(sampleActivityNumber)) {
    return false;
  }

  result = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (LOG_OF_TWO / HALF_LIFE_PERIOD);

  return Math.ceil(result);
}
