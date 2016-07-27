'use strict';

class CompareNumber {

  static compareNumber(answer, userNumber) {

    const answers = answer.split('');
    const userNumbers = userNumber.split('');

    const getWrongPosCount = () => {
      return userNumbers.map((userNumber, index) =>
          answers[index] != userNumber
          && answers.some(answer => answer === userNumber)
            ? 1 : 0)
        .reduce((prev, curr) => prev + curr);
    };

    const getCorrectNumberCount = () => {
      return userNumbers.map((userNumber, index) =>
          answers[index] === userNumber
            ? 1 : 0)
        .reduce((prev, curr) => prev + curr);
    };

    const a = getCorrectNumberCount();
    const b = getWrongPosCount();

    return `${a}A${b}B`;
  }
}

module.exports = CompareNumber;
