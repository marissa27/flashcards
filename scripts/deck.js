import Card from '../scripts/card'
import Guess from '../scripts/guess'

class Deck {
  constructor(card) {
    this.cards = card;
    // or do as an object that holds answer and question?
  }

  count() {
    return this.cards.length
  }
}


export default Deck
