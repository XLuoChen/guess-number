'use strict';

const CompareNumber = require('../src/comapre-number');

describe('compare number', () => {

  it('should return string 4A0B when userNumber correct completely', () => {

    const string = new CompareNumber('1234', '1234').compareNumber();

    expect(string).toEqual('4A0B');
  });

  it('should return string 0A0B when userNumber is wrong completely', () => {
    const string = new CompareNumber('1234', '5678').compareNumber();

    expect(string).toEqual('0A0B');
  });

  it("should return string 0A4B when userNumbers is correct but positions is wrong", () => {
    const string = new CompareNumber('1234', '4321').compareNumber();

    expect(string).toEqual('0A4B');
  });

  it('should return string 2A2B when both have correct numbers and correct', () => {
    const string = new CompareNumber('1234', '1243').compareNumber();

    expect(string).toEqual('2A2B');
  });
});
