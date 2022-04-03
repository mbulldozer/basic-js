const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let max = 0;
            for (let i = 0; i < arr.length; i++) {
                max = Math.max(max, this.calculateDepth(arr[i]));
            }
            return max + 1;
        } else {
            return 0;
        }
        // remove line with error and write your code here
    }
}

module.exports = {
    DepthCalculator
};
