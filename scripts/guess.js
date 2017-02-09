import Card from '../scripts/card'
import Deck from '../scripts/deck'

class Guess {
  constructor ({response, card}) {
    this.response = response;
    this.card = card;
    this.correct = card.answer === response ? true : false;
  }

  feedback() {
    if(this.correct) {
      return 'kudos, champ.'
    } else {
      return 'go back to school'
    }
  }
}

export default Guess
