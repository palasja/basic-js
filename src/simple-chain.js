const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};
// const chainMaker = {
//   chain: "",
//   getLength() {
//     // if (this.chain === undefined)
//     //   throw new Error("You can't remove incorrect link!");
//     return this.chain.split("~~").length;
//   },
//   addLink(value) {
//     // if (this.chain === undefined)
//     //   throw new Error("You can't remove incorrect link!");
//     if (arguments.length == 0) this.chain += "( )";
//     this.chain += this.chain.length == 0 ? `( ${value} )` : `~~( ${value} )`;
//     return this;
//   },
//   removeLink(position) {
//     // if (this.chain === undefined)
//     //   throw new Error("You can't remove incorrect link!");
//     let arr = this.chain.split("~~");
//     if (isNaN(Number(position)) || position <= 0 || position > arr.length)
//       throw new Error("You can't remove incorrect link!");
//     let filtredArr = arr.filter((val, index) => index != position - 1);
//     this.chain = filtredArr.join("~~");
//     return this;
//   },
//   reverseChain() {
//     // if (this.chain === undefined)
//     //   throw new Error("You can't remove incorrect link!");
//     let arr = this.chain.split("~~");
//     this.chain = arr.reverse().join("~~");
//     return this;
//   },
//   finishChain() {
//     // if (this.chain === undefined)
//     //   throw new Error("You can't remove incorrect link!");
//     // let tmp = this.chain;
//     // this.chain = undefined;
//     return this.chain;
//   },
// };

module.exports = {
  chainMaker,
};
