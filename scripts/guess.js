import Card from '../scripts/card'
import Deck from '../scripts/deck'

class Guess {
  constructor ({response, card}) {
    this.response = response;
    this.card = card;
    this.correct = card.answer === response ? true : false;

    // this.response = response;
    // this.card = card;
  }

  feedback() {
    if(this.correct) {
      return 'kudos, champ.'
    } else {
      return 'go back to school'
    }
    // let userResponse = guess.response.toLowerCase()
    // let answer = guess.card.answer.toLowerCase()
    //  return answer === userResponse ? 'correct' : 'false';
  }
}

export default Guess
