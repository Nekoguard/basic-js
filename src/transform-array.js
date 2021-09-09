import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }

  let result = [];
  let isDiscardNext = false;
  let isDoubleNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (isDiscardNext) {
      isDiscardNext = false;
      continue;
    }

    let elem = arr[i];

    if (Number.isInteger(elem)) {
      if (isDoubleNext) {
        result.push(elem);
        isDoubleNext = false;
      }

      result.push(elem);

    } else if (elem === '--discard-next') {
      isDiscardNext = true;

    } else if (elem === '--discard-prev' && i > 0) {
      result.splice(i - 1, 1);

    } else if (elem === '--double-next') {
      isDoubleNext = true;

    } else if (elem === '--double-prev') {
      if (i > 0) {
        result.push(arr[i - 1]);
      }
    }
  }

  return result;
}
