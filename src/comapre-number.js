'use strict';

class CompareNumber {
  constructor(answer, userNumber) {
    this.answer = answer;
    this.userNumber = userNumber;
  }

  compareNumber() {

    const answers = this.answer.split('');
    const userNumbers = this.userNumber.split('');

    const getWrongPosCount = () => {
      return userNumbers.map((userNumber, index) =>
          answers[index] != userNumber && answers.some(answer => answer === userNumber)
            ? 1 : 0)
        .reduce((prev, curr) => prev + curr, 0);
    };

    const getCorrectNumberCount = () => {
      return userNumbers.map((userNumber, index) => answers[index] === userNumber ? 1 : 0)
        .reduce((prev, curr) => prev + curr, 0);
    };

    const a = getCorrectNumberCount();
    const b = getWrongPosCount();

    return `${a}A${b}B`;
  }
}

module.exports = CompareNumber;
