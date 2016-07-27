'use strict';

const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');
const stdin = require('mock-stdin').stdin();

describe('Game start', () => {
  it("should print 'congratulations' when input correctly during times", () => {
    spyOn(AnswerGenerator, 'generateAnswer').and.returnValue('1234');
    spyOn(console, 'log');
    Game.game();
    stdin.send('1234');
    
    expect(console.log).toHaveBeenCalledWith('Congratulations!');
  });
});
