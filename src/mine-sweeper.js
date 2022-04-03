const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let h = matrix.length;
    let w = matrix[0].length;
    let minesField = JSON.parse(JSON.stringify(matrix)).map(el => el.fill(0));
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (matrix[i][j]) {
                for (let k = -1; k <= 1; k++) {
                    for (let t = -1; t <= 1; t++) {
                        if (i + k >= 0 &&
                            j + t >= 0 &&
                            i + k < h &&
                            j + t < w) {
                            minesField[i + k][j + t] += 1;
                        }
                    }
                }
                minesField[i][j] -= 1
            }
        }
    }
    return minesField;
    // remove line with error and write your code here
}

module.exports = {
    minesweeper
};
