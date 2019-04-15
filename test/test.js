// Dependencies
const Deck = require('../lildeck.js');

// Main Process
const d = new Deck(),
      howManyEpochs = 1000,
      howManyPerEpoch = 10,
      totalDraws = howManyEpochs * howManyPerEpoch,
      counters = {};

console.log("Let's see the probability of each rank of card being drawn...");

for (let i = 0; i < howManyEpochs; i++) {
  for (let j = 0; j < howManyPerEpoch; j++) {
    const {val} = d.draw();
    counters[val] = counters[val] ? counters[val] + 1 : 1;
  }
  d.pickup();
}

const results = Object.entries(counters)
  .map(([val, amt]) => [val, amt / totalDraws])
  .reduce((acc, [val, prob]) => {
    acc[val] = {prob};
    return acc;
  }, {});

console.table(results);
