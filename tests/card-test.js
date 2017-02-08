import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/card'
import Guess from '../scripts/guess'
import Deck from '../scripts/deck'


describe('Card', () => {

  it('Card should be a function', () => {
    assert.isFunction(Card);
  });

  it('should be able to instantiate a card', () => {
    let card1 = new Card({});
    assert.isObject(card1);
  });

  it('should take a question', () => {
    let card = new Card({question: 'What is the capital of Alaska?'});
    assert.equal(card.question, 'What is the capital of Alaska?');
  });

  it('should take an answer', () => {
    let card = new Card({answer: 'Juneau'});
    assert.equal(card.answer, 'Juneau');
  });

  it('should hold both question and answer', () => {
    let card = new Card({answer: 'Juneau', question: 'What is the capital of Alaska?'});
    assert.equal(card.answer, 'Juneau')
    assert.equal(card.question, 'What is the capital of Alaska?');
  });


});
