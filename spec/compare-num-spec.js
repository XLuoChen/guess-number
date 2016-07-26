'use strict';

const CompareNumber = require('../src/comapre-number');
const AnswerGenerator = require('../src/answer-generator');

describe('compare number', () => {

  it('should return string 4A0B when userNumber correct completely', () => {

    const string = new CompareNumber().compareNumber('1234', '1234');

    expect(string).toEqual('4A0B');
  });

  it('should return string 0A0B when userNumber is wrong completely', () => {
    const string = new CompareNumber().compareNumber('1234', '5678');

    expect(string).toEqual('0A0B');
  });

  it("should return string 0A4B when userNumbers is correct but positions is wrong", () => {
    const string = new CompareNumber().compareNumber('1234', '4321');

    expect(string).toEqual('0A4B');
  });

  it('should return string 2A2B when both have correct numbers and correct', () => {
    const string = new CompareNumber().compareNumber('1234', '1243');

    expect(string).toEqual('2A2B');
  });
});

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
