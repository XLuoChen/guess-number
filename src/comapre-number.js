'use strict';

class CompareNumber {
  constructor(answer, userNumber) {
    this.answer = answer;
    this.userNumber = userNumber;
  }

  compareNumber() {
    let a = 0, b = 0;
    const answers = this.answer.split('');
    const userNumbers = this.userNumber.split('');

    const isEqual = () => {
      return this.answer === this.userNumber;
    };

    const isWrong = () => {
      return userNumbers.forEach(userNumber => !(answers.some(answer => answer === userNumber)));
    };

    const getCountWhenHaveWroPos = () => {
      return userNumbers.map(userNumber => answers.some(answer => answer === userNumber) ? 1 : 0)
        .reduce((prev, curr) => prev + curr, 0);
    };

    if (isEqual()) {
      a = 4;
      b = 0;
    }
    else if (isWrong()) {
      a = 0;
      b = 0;
    }
    else {
      b = getCountWhenHaveWroPos();
    }

    return `${a}A${b}B`;
  }
}

module.exports = CompareNumber;
