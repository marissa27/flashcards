import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/card'
import Deck from '../scripts/deck'
import Guess from '../scripts/guess'

describe('Deck', () => {

  it('Deck should be a function', () => {
    assert.isFunction(Deck);
  });

  it('Deck should hold an array', () => {
    let deck = new Deck([])
    assert.deepEqual(deck.cards, []);
  });

  it('should have property of cards', () => {
    let card1 = new Card("What is the capital of Alaska?", "Juneau")
    let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
    let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")

    let deck = new Deck([card1, card2, card3])

    assert.deepEqual(deck.cards, [card1, card2, card3])
  })


  it('should have property of cards', () => {
    let card1 = new Card("What is the capital of Alaska?", "Juneau")
    let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
    let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")

    let deck = new Deck([card1, card2, card3])

    deck.count();

    assert.deepEqual(deck.count(), 3)
    })

    it('check for count()', () => {
      let card1 = new Card("What is the capital of Alaska?", "Juneau")
      let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
      let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")

      let deck = new Deck([card1, card2, card3])

      assert.isFunction(deck.count);
    });
});
