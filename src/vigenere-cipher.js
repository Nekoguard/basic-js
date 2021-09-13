import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 *
 * The text returned by these methods must be uppercase.
 * Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).
 */
export default class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    if (key.length < message.length) {
       key.repeat(message.length / key.length);
    }

    if (key.length > message.length) {
      message.repeat(key.length / message.length);
    }

    for (let i = 0, j= 0; result.length !== message.length; i++, j++) {
      if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        result += message[i];
        j--;
        continue;
      }
      result += String.fromCharCode((message.charCodeAt(i) - 97 + (key.charCodeAt(j) - 97)) % 26 + 97).toUpperCase();
    }

    if (this.mode) {
      return result;
    }

    return result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    if (key.length < encryptedMessage.length) {
      key.repeat(encryptedMessage.length / key.length);
    }

    if (key.length > encryptedMessage.length) {
      encryptedMessage.repeat(key.length / encryptedMessage.length);
    }

    for (let i = 0, j= 0; result.length !== encryptedMessage.length; i++, j++) {
      if (encryptedMessage.charCodeAt(i) < 97 || encryptedMessage.charCodeAt(i) > 122) {
        result += encryptedMessage[i];
        j--;
        continue;
      }
      result += String.fromCharCode((encryptedMessage.charCodeAt(i) - 97 - (key.charCodeAt(j) - 97) + 26) % 26 + 97).toUpperCase();
    }

    if (this.mode) {
      return result;
    }

    return result.split('').reverse().join('');
  }
}
