import Card from '../scripts/card'
import Guess from '../scripts/guess'

class Deck {
  constructor(card) {
    this.cards = card;
  }

  count() {
    return this.cards.length
  }
}

export default Deck
