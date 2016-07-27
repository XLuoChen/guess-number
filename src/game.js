'use strict';

const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./comapre-number');

class Game {

  static game() {
    const answer = AnswerGenerator.generateAnswer();

    const isDuplicate = (item, index, array) => {
      return array.lastIndexOf(item) != index;
    };
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (userNumber) => {
      console.log('Welcome!');
      for (let i = 0; i < 6; i++) {
        console.log('Please input your number(6):');
        if (userNumber.split('').every(isDuplicate)) {
          console.log('Cannot input duplicate numbers!');
        }
        else {
          const text = CompareNumber.compareNumber(answer, userNumber);
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
    });
  }
}

Game.game();

module.exports = Game;
