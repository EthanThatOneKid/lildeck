module.exports = class Deck {

  constructor() {
    this.cards;
    this.pickup();
  }

  pickup() {
    this.cards = Deck.freshDeck();
  }

  draw() {
    if (!!this.cards.length) {
      const i = ~~(Math.random() * this.cards.length);
      const card = this.cards[i];
      this.cards.splice(i, 1);
      return card;
    } else {
      return console.error(`
        The deck has been emptied.
        Call Deck.pickup() to refill the deck.
      `);
    }
  }

  static freshDeck() {
    const result = [];
    for (let suit of ["s", "c", "d", "h"]) {
      for (let rank of ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]) {
        const str = rank + suit,
              val = Deck.cardVal(rank);
        result.push({suit, rank, str, val});
      }
    }
    return result;
  }

  static cardVal(v) {
    return ("A".includes(v))   ? 1  :
           ("JQK".includes(v)) ? 10 : v;
  }

}
