const { interval } = require('rxjs');

const generateNumbers = interval(500);

const execution = generateNumbers.subscribe(num => {
  console.log(Math.pow(2, num));
});

setInterval(() => {
  execution.unsubscribe();
}, 5000);
