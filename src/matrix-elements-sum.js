const { NotImplementedError } = require('../extensions/index.js');

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
function getMatrixElementsSum(matrix) {
  let res = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let a = 0; a < matrix[i].length; a++) {
      if (i === 0 || matrix[i - 1][a] > 0) {
        res.push(matrix[i][a]);
      }
    }
  }

  return res.reduce((sum, curr) => sum + curr, 0);
}

module.exports = {
  getMatrixElementsSum
};
