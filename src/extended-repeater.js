const {NotImplementedError} = require('../extensions/index.js');

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
function repeater(str, options) {
    let subAddition = options.hasOwnProperty('addition') ?
        new Array(options.additionRepeatTimes)
            .fill(String(options.addition))
            .join(options.additionSeparator || '|') : '';
    let subStr = String(str) + subAddition;
    return new Array(options.repeatTimes)
        .fill(subStr)
        .join(options.separator || '+');
    // remove line with error and write your code here
}

module.exports = {
    repeater
};
