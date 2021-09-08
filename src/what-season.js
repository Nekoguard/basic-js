import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  let season = date.getUTCMonth();

  if (season === 11 || season >= 0 && season <= 1) {
    return 'winter';
  } else if (season >= 2 && season <= 4) {
    return 'spring';
  } else if (season >= 5 && season <= 7) {
    return 'summer';
  } else if (season >= 8 && season <= 10) {
    return 'autumn';
  } else {
    throw new Error('Invalid date!');
  }
}
