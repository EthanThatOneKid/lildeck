# lildeck
![bundle size](https://img.shields.io/bundlephobia/min/lildeck.svg)
![npm downloads](https://img.shields.io/npm/dt/lildeck.svg)

an NPM package that keeps track of all the cards in a single deck (short for *little deck*)

## Installation
`npm i lildeck`

## Usage
`const Deck = require('lildeck');`

## Documentation
### `Deck.draw()`
* draws a random card from the deck
* removes that card from the deck (so it will not be drawn again)
* returns card `{suit, rank, str, val}`
### `Deck.pickup()`
* refills the deck to the standard 52-count
* returns nothing
