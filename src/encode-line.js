const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = str.replace(/(\w)\1+/g, letter => `${letter.length}${letter[0]}`);
  return res;
}

module.exports = {
  encodeLine
};
