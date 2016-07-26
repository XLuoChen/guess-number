const CompareNumber = require('../src/comapre-number');

describe('compare number', () => {

  it('should return string 4A0B when userNumber correct completely', () => {

    const string = new CompareNumber('1234','1234').compareNumber();

    expect(string).toEqual('4A0B');
  })
});
