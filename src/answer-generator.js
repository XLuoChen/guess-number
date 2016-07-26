'use strict';

class AnswerGenerator {
  constructor(answer, length, isHasSame) {
    this.answer = answer;
    this.length = length;
    this.isHasSame = isHasSame;
  }

  static generateAnswer() {
    let times = 4;
    const numbers = [];
    let isHasSameNum;

    const isHasSame = (digit) => {
      return numbers.some(number => number === digit);
    };

    while (times) {
      const digit = Math.floor(Math.random() * 10 + 1) % 10;
      isHasSameNum = isHasSame(digit);
      if (!isHasSameNum) {
        numbers.push(digit);
        times--;
      }
    }

    return new AnswerGenerator(numbers.join(''), numbers.length, isHasSameNum);
  }
}

module.exports = AnswerGenerator;
