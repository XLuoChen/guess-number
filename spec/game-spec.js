'use strict';

const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');

describe('Game start',() => {
  xit("should print 'congratulations' when input correctly during times",() => {
    spyOn(AnswerGenerator,'generateAnswer').and.returnValue('1234');
    Game.game();
    spyOn(console,'log');
    expect(console.log).toHaveBeenCalledWith('Congratulations!');
  });

});
