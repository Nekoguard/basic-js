import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!members || Array.isArray(members) === false) return false;

  let result = [];

  members.forEach(member => {
    if (typeof(member) === "string") {
      member = member.trim();
      result.push(member[0].toUpperCase());
    }
  })

  return result.sort().join('');
}
