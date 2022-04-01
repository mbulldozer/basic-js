const {NotImplementedError} = require('../extensions/index.js');

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
    return str.split('').reduce((acc, curr) => {
        acc[acc.length - 1][0] === curr ?
            acc[acc.length - 1][1] += 1 :
            acc.push([curr, 1]);
        return acc;
    }, [['', 0]]).map(el => el[1] > 1 ? String(el[1]) + el[0] : el[0]).join('');
    // remove line with error and write your code here
}

module.exports = {
    encodeLine
};
