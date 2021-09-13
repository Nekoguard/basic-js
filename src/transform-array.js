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

  let result = [];

  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev' || arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
      i += 3;
    }

    if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      i++;
    } else if (arr[i] === '--discard-prev' && i > 0) {
      result.splice(i - 1, 1);
    } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
      result.push(arr[i]);
    } else if (arr[i] === '--double-prev' && i > 0) {
        result.push(arr[i - 1]);
    }

    if (arr[i] === '--discard-next' && i === arr.length - 1) {
      continue;
    } else if (arr[i] === '--discard-prev' && i === 0) {
      i++;
    } else if (arr[i] === '--double-next' && i === arr.length - 1) {
      continue;
    } else if (arr[i] === '--double-prev' && i === 0) {
      i++;
    }

    result.push(arr[i]);
  }

  return result;
}
