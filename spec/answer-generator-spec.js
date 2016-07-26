'use strict';

const AnswerGenerator = require('../src/answer-generator');

describe('generate answer', () => {
  it('should generate answer whose length is 4', () => {
    const answer = AnswerGenerator.generateAnswer();

    expect(answer.length).toEqual(4);
  });

  it('should generate answer which has not same numbers', () => {
    const answer = AnswerGenerator.generateAnswer();

    expect(answer.isHasSame).toEqual(false);
  });
});
