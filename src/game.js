'use strict';

const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./comapre-number');
const scanf = require('scanf');

class Game {

  static game() {
    const isDuplicate = (item, index, array) => {
      return array.lastIndexOf(item) === index;
    };

    console.log('Welcome!');
    for (let i = 0; i < 6; i++) {
      console.log('Please input your number(6):');
      const userNumber = scanf('%s');
      if (!userNumber.split('').every(isDuplicate)) {
        console.log('Cannot input duplicate numbers!');
      }
      else {
        const answer = AnswerGenerator.generateAnswer();
        const text = new CompareNumber().compareNumber(answer, userNumber);
        if (text === '4A0B') {
          console.log('Congratulations!');
          return;
        }
        else {
          console.log(text);
        }
      }
    }
    console.log('Game Over!');
  }
}

module.exports = Game;
