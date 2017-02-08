import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/card'
import Deck from '../scripts/deck'
import Guess from '../scripts/guess'
import Round from '../scripts/round'


describe('Round', () => {

  it('Round should be a function', () => {
    assert.isFunction(Round);
  });

  it('a round should have a deck', () => {
    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
    let card2 = new Card({question:"The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer:"Mars"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    assert(round.deck instanceof Deck, "no deck here");
  });

  it ('should have guesses', ()=> {
    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
    let card2 = new Card({question:"The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer:"Mars"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    assert(round.guesses, [])
    });

  it('should have function currentCard', () => {
    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
    let card2 = new Card({question:"The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer:"Mars"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    assert.isFunction(round.currentCard)
  })

  it('should show current card', () => {
    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
    let card2 = new Card({question:"The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer:"Mars"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    assert.equal(round.currentCard(), card1);
  })

  it('should take a response', () => {

    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})

    let deck = new Deck([card1])

    let round = new Round(deck)

    round.recordGuess('Juneau')

    assert.equal(round.guesses.length, 1);
  })

  it('check guesses feedback for true', () => {

    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})

    let deck = new Deck([card1])

    let round = new Round(deck)

    round.recordGuess('Juneau')

    assert.equal(round.guesses[0].feedback(), 'kudos, champ.');

  })

  it('check guesses feedback for false', () => {

    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})

    let deck = new Deck([card1])

    let round = new Round(deck)

    round.recordGuess('Denver')

    assert.equal(round.guesses[0].feedback(), 'go back to school');

  })

  it('should make numberCorrect increase by 1 if correct', () => {

    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})

    let card2 = new Card({question:"What is the capital of Colorado?", answer:"Denver"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    round.recordGuess('Juneau')

    assert.equal(round.numberCorrect, 1);
  })

  it('should make numberCorrect not change if wrong', () => {

    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})

    let card2 = new Card({question:"What is the capital of Colorado?", answer:"Denver"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    round.recordGuess('hello')

    assert.equal(round.numberCorrect, 0);
  })

  it('should make numberCorrect not change if wrong', () => {

    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})

    let card2 = new Card({question:"What is the capital of Colorado?", answer:"Denver"})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    round.recordGuess('hello')

    assert.equal(round.numberCorrect, 0);
  })


  });

  // round.currentCard()
  // => Card { answer: "93,000,000", question: "Approximately how many miles are in one astronomical unit?"}
  // round.recordGuess("2")
  // => Guess {card: Card { answer:"93,000,000", question: "Approximately how many miles are in one astronomical unit?"}, response: "2"}
  // round.guesses.count
  // => 2
  // round.guesses[1].feedback
  // => "Incorrect."
  // round.numberCorrect
  // => 1
  // round.percentCorrect()
  // => 50
