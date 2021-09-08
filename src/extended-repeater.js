import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let string = String(str);

  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  if (options.addition !== undefined) {
    let strArr = [string + options.addition];

    for (let i = 1; i < options.additionRepeatTimes; i++) {
      strArr.push(options.addition);
    }

    string = strArr.join(options.additionSeparator);
  }

  let result = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(string);
  }

  result = result.join(options.separator);

  return result;
}
