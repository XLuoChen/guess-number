const CompareNumber = require('../src/comapre-number');

describe('compare number', () => {

  it('should return string 4A0B when userNumber correct completely', () => {

    const string = compareNumber(new CompareNumber('1234','1234'));

    expect(string).toEqual('4A0B');
  })
});
