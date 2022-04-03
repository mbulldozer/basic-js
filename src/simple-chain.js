const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
        // remove line with error and write your code here
    },
    addLink(value) {
        this.chain.push(`( ${String(value)} )`);
        return this;
        // remove line with error and write your code here
    },
    removeLink(position) {
        if (typeof position === 'number' && position > 0 && position < this.chain.length) {
            this.chain.splice(position - 1, 1);
            return this;
        } else {
            this.chain = [];
            throw new NotImplementedError('You can\'t remove incorrect link!');
        }

        // remove line with error and write your code here
    },
    reverseChain() {
        this.chain.reverse();
        return this;
        // remove line with error and write your code here
    },
    finishChain() {
        let resultChain = this.chain.join('~~');
        this.chain = [];
        return resultChain;
        // remove line with error and write your code here
    }
};

module.exports = {
    chainMaker
};
