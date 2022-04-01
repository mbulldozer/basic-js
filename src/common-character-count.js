const {NotImplementedError} = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
    let s = s2;
    return s1.split('').reduce((q, curr) => {
        let i = s.indexOf(curr);
        if (i + 1) {
            s = s.replace(curr, '');
            return q += 1;
        }
        return q
    }, 0)
    // remove line with error and write your code here
}

module.exports = {
    getCommonCharacterCount
};
