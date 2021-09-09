import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let string1 = s1.split('');
  let string2 = s2.split('');

  for (let i = 0; i < string1.length; i++) {
    for (let k = 0; k < string2.length; k++) {
      if (string1[i] === string2[k]) {
        counter++;
        string2 = string2.slice(0, k) + string2.slice(k + 1, string2.length);
        if (i !== string1.length - 1 && k !== string2.length - 1) {
          i++;
          k++;
        }
      }
    }
  }

  return counter;
}
