'use strict';

const CompareNumber = require('../src/comapre-number');

describe('Compare Number', () => {

  it('returns xAxB', () => {
    [{
      input: '1234',
      answer: '5678',
      result: '0A0B'
    },{
      input: '1234',
      answer: '1234',
      result: '4A0B'
    },{
      input: '1234',
      answer: '1243',
      result: '2A2B'
    }].forEach(example => {
      const result = CompareNumber.compareNumber(example.answer,example.input);
      expect(result).toEqual(example.result);
    })
  })
});

