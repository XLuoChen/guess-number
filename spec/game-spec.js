'use strict';

const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');

describe('Game start',() => {
  it("should print 'congratulations' when input correctly during times",() => {
    spyOn(AnswerGenerator,'generateAnswer').and.returnValue('1234');
    Game.game();
    spyOn(console,'log');
    expect(console.log).toHaveBeenCalledWith('Congratulations!');
  });

  it("should print 'Game Over!' when input wrong and beyond times",() => {
    spyOn(AnswerGenerator,'generateAnswer').and.returnValue('1234');
    Game.game();
    spyOn(console,'log');
    expect(console.log).toHaveBeenCalledWith('Game Over!');
  });
});
