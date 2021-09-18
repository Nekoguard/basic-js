import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let elementsSum = 0;
  let zeroIndexes = [];

  matrix.forEach(subArr => {
    subArr.forEach((elem, i) => {
      if (elem === 0) {
        zeroIndexes.push(i);
      }

      if (!zeroIndexes.includes(i)) {
        elementsSum += elem;
      }
    });
  });

  return elementsSum;
}
