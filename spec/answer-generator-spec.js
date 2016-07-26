'use strict';

const AnswerGenerator = require('../src/answer-generator');

describe('generate answer', () => {
  it('should generate answer', () => {

    const isUnique = (item, index, array) => {
      return array.lastIndexOf(item) === index;
    };

    const answer = AnswerGenerator.generateAnswer();
    expect(answer.length).toEqual(4);
    expect(answer.split('').every(isUnique)).toBeTruthy();
    expect(AnswerGenerator.generateAnswer()).not.toEqual(AnswerGenerator.generateAnswer());
  });
});

