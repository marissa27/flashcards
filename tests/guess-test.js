import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/card'
import Deck from '../scripts/deck'
import Guess from '../scripts/guess'


describe('Guess', () => {

  it('Guess should be a function', () => {
    assert.isFunction(Guess);
  });

  it('should make a new card', () => {
    let card = new Card({question: 'What is the capital of Alaska?'});

    assert.equal(card.question, 'What is the capital of Alaska?');
  });

  it('should be able to create a guess', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?'});

    let guess1 = new Guess({response: "Juneau", card: card1})

    assert.equal(guess1.response, 'Juneau');
  });

  it('check for feedback()', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});

    let guess1 = new Guess({response: "Denver", card: card1})

    assert.isFunction(guess1.feedback);
  });

  it('should display if correct', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?'});

    let guess1 = new Guess({response: "Juneau", card: card1})

    assert.equal(guess1.response, 'Juneau');
  });

  it('should display if wrong', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});

    let guess1 = new Guess({response: "Denver", card: card1})

    assert.notEqual('Juneau', 'Denver', 'false');
  });

  it('should see if guess.correct is false', ()=> {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});

    let guess1 = new Guess({response: "Denver", card: card1})

    assert.equal(guess1.correct, false);
  });

  it('should see if guess.correct is true', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});

    let guess1 = new Guess({response: "Juneau", card: card1})

    assert.equal(guess1.correct, true)
  })


});
