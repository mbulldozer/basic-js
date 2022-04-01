const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    return matrix.reduce((q1, curr1) => {
        return q1 + curr1.reduce((q2, curr2) => {
            return curr2 === '^^' ? q2 + 1 : q2
        }, 0)
    }, 0)
// remove line with error and write your code here
}

module.exports = {
    countCats
};
