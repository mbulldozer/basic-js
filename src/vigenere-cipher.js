const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type) {
        this.direct = type === false ? false : true;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.n = 26;
    }

    repeat(str, key) {
        return Math.ceil(str.length / key.length);
    }

    getKeyStr(str, key) {
        return key.repeat(this.repeat(str, key)).toUpperCase();
    }

    encrypt(str, key) {
        if (!str || !key) throw new NotImplementedError('Incorrect arguments!');
        let keyStr = this.getKeyStr(str, key);
        let j = 0;
        let result = str.toUpperCase().split('').map((char, i) => {
            if (this.alphabet.includes(char)) {
                let m = this.alphabet.indexOf(char);
                let k = this.alphabet.indexOf(keyStr[i - j]);
                let c = (m + k) % this.n;
                return this.alphabet[c]
            } else {
                j += 1;
                return char;
            }
        });
        console.log(this.reverse);
        if (!this.direct) result.reverse();
        return result.join('');
    }

    decrypt(str, key) {
        if (!str || !key) throw new NotImplementedError('Incorrect arguments!');
        let keyStr = this.getKeyStr(str, key);
        let j = 0;
        let result = str.toUpperCase().split('').map((char, i) => {
            if (this.alphabet.includes(char)) {
                let c = this.alphabet.indexOf(char);
                let k = this.alphabet.indexOf(keyStr[i - j]);
                let m = (c - k) % this.n;
                return this.alphabet[m < 0 ? this.n + m : m]
            } else {
                j += 1;
                return char;
            }
        });
        if (!this.direct) result.reverse();
        return result.join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};
