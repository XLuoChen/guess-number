'use strict';
const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./comapre-number');

class Guess{

  static guess(input){
    const answer = AnswerGenerator.generateAnswer();
    const string = new CompareNumber().compareNumber(answer,input);

    return string;
  }
}

module.exports = Guess;
