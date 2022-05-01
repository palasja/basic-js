const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(reverse = true) {
    this.direction = reverse;
    this.table = this.getTable();
  }
  direction;
  table;
  encrypt(message, key) {
    if (
      arguments.length != 2 ||
      typeof message != "string" ||
      typeof key != "string"
    )
      throw new Error("Incorrect arguments!");
    let mes = message.toLowerCase();
    let k = key.toLowerCase();
    let res = "";
    let c = 0;
    for (let i = 0; i < mes.length; i++) {
      if (mes.charAt(i).match(/[a-z]/) === null) {
        res += mes.charAt(i);
      } else {
        let mult = Math.floor(c / key.length);
        let a = mes.codePointAt(i) - 97;
        let b = k.codePointAt(c - mult * k.length) - 97;
        res += String.fromCodePoint(97 + this.table[a][b]);
        c++;
      }
    }
    if (this.direction) {
      return res.toUpperCase();
    }
    return res.toUpperCase().split("").reverse().join("");
  }
  decrypt(message, key) {
    if (
      arguments.length != 2 ||
      typeof message != "string" ||
      typeof key != "string"
    )
      throw new Error("Incorrect arguments!");
    let mes = message.toLowerCase();
    let k = key.toLowerCase();
    let res = "";
    let c = 0;
    for (let i = 0; i < mes.length; i++) {
      if (mes.charAt(i).match(/[a-z]/) === null) {
        res += mes.charAt(i);
      } else {
        let mult = Math.floor(c / key.length);
        let b = k.codePointAt(c - mult * k.length) - 97;
        let a = this.table[b].findIndex((el) => el == mes.codePointAt(i) - 97);
        res += String.fromCodePoint(97 + a);
        c++;
      }
    }
    if (this.direction) {
      return res.toUpperCase();
    }
    return res.toUpperCase().split("").reverse().join("");
  }
  getTable() {
    let table = [];
    for (let i = 0; i < 26; i++) {
      let row = [];
      for (let j = 0; j < 26; j++) {
        if (i + j < 26) {
          row.push(i + j);
        } else {
          row.push(i + j - 26);
        }
      }
      table.push(row);
    }
    return table;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
