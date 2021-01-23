const { interval } = require('rxjs');

const generateNumbers = interval(500);

const exectution = generateNumbers.subscribe(num => {
  console.log(Math.pow(2, num));
});

setInterval(() => {
  exectution.unsubscribe();
}, 5000);
