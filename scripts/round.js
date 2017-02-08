import Card from '../scripts/card'
import Guess from '../scripts/guess'
import Deck from '../scripts/deck'

class Round {
  constructor(deck) {
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;
  }
  currentCard() {
    return this.deck.cards[0]
  }
  recordGuess(userGuess) {
    let guess = new Guess({response: userGuess, card: this.currentCard()})

    this.guesses.unshift(guess)

    if(this.guesses[0].feedback() === 'kudos, champ.') {
      this.numberCorrect++
    } else {
    return this.guesses
  }
}
}
export default Round

// round.recordGuess('Juneau')
