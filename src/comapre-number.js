'use strict';

class CompareNumber {
  constructor(answer, userNumber) {
    this.answer = answer;
    this.useNumber = userNumber;
  }

  compareNumber() {
    let a = 0, b = 0;
    const isEqual = () => {
      return this.answer === this.useNumber;
    };

    if (isEqual()) {
      a = 4;
      b = 0;
    }

    return `${a}A${b}B`;
  }
}

module.exports = CompareNumber;
