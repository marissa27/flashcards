import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/card'
import CardsGenerator from '../scripts/card-gen'

let filename = "cards.txt";
describe('Card Generator', () => {

  let cardsGenerator = new CardsGenerator(filename);

  it('CardGenerator should be a function', () => {
    assert.isFunction(CardsGenerator);
  });

  it('readFile is a function', () => {
    assert.isFunction(cardsGenerator.readFile);
  })

  it('Should take in a file', () => {
    assert.equal(cardsGenerator.filename, "cards.txt");
  })

  it('should split lines into their own arrays', () => {
    let cards = cardsGenerator.readFile(filename);
    assert.equal(cards.length, 4);
  })

});

// var fs = require('fs');
// let words = fs.readFileSync('./scripts/cards.txt', 'utf8').trim().split('\n');
//
// let mapWords = words.map(e =>{
//   let lines = e.split(',')
//   return lines
// })
// //
// // let reduceWords = mapWords.reduce((a, b)=> {
// //   let newCards = new Card({question: b[0], answer: b[1]})
// //   a.push(newCards)
// //   return a;
// // },[])
// //
// // console.log(reduceWords);
